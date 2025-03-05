import { useEffect, useState } from "react";

import { database, get, ref } from "@src/firebaseConfig"; // Import Firebase từ file cấu hình

const FetchData = (path?: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const snapshot = await get(ref(database, `/${path}`)); // Lấy toàn bộ dữ liệu
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log("Không có dữ liệu!");
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    }

    fetchData();
  }, [path]);
  return data;
};

export default FetchData;
