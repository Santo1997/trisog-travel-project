import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { getStrdCart } from "../../../../utilities/fakeDB";

const UserData = () => {
  const { user, loading } = useContext(AuthContext);
  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    if (!loading) {
      const storedData = getStrdCart(user?.uid);
      setStoreData(storedData?.data);
    }
  }, [user, loading]);

  return (
    <>
      {user ? (
        <>
          <div className="px-5 md:px-20 mt-5">
            <div className="text-center">
              <h2 className="text-lg font-bold italic text-blue-900">Data</h2>
              <h1 className="text-3xl font-bold">Your Data</h1>
            </div>

            <div className="overflow-x-auto mt-5 p-4 w-fit mx-auto bg-[#f5f6f8]">
              <table className="table p-10 leading-none  rounded-none ">
                <tbody>
                  <tr>
                    <th>User</th>
                    <td>{user.displayName}</td>
                  </tr>
                  <tr>
                    <th>User Email</th>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <th>Destination</th>
                    <td>
                      {storeData?.destinate ? storeData?.destinate : "Not Set"}
                    </td>
                  </tr>
                  <tr>
                    <th>Type</th>
                    <td>{storeData?.type ? storeData?.type : "Not Set"}</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>{storeData?.date ? storeData?.date : "Not Set"}</td>
                  </tr>
                  <tr>
                    <th>Guest</th>
                    <td>{storeData?.guest ? storeData?.guest : "Not Set"} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default UserData;
