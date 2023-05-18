import { supabase } from "@/libs/utils/supabaseClient"
import { Database } from "@/types/database"
import { useEffect, useState } from "react"

const useDatabases = (userId: string) => {
  const [datas, setDatabases] = useState<Database[]>()

  const fetchDatabases = async (userId: string) => {
    const {
      data: databases,
      error,
      status,
    } = await supabase
      .from("databases")
      .select("database_id,name,user_id,created_at")
      .eq("user_id", userId)
    // console.log(databases)
    databases && setDatabases(databases)
  }

  useEffect(() => {
    userId && fetchDatabases(userId)
    // console.log("use fetchDatabases")
  }, [userId])

  return {
    datas,
  }
}
export default useDatabases
