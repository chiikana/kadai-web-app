import { supabase } from "@/libs/utils/supabaseClient"
import { NextApiRequest, NextApiResponse } from "next"

const databaseApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const userId = req.query.userId
    if (!userId) return res.status(400).json({ message: "userId is required" })
    const { data, error } = await supabase
      .from("databases")
      .select("database_id,user_id,name,created_at")
      .eq("user_id", userId)

    if (error) {
      return res.status(500).json({ message: "Failed to fetch data from database", error: error })
    }

    return res.status(200).json(data)
  }
}
export default databaseApi
