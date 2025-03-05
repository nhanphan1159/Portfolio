import { useEffect, useState } from "react";

import { database, get, ref } from "@src/firebaseConfig";

const FetchData = (path?: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const snapshot = await get(ref(database, `/${path}`));
        if (snapshot.exists()) {
          setData(snapshot.val());
          setLoading(false);
        } else {
          console.log("Không có dữ liệu!");
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    }

    fetchData();
  }, [path]);
  return { data, loading };
};

export default FetchData;
