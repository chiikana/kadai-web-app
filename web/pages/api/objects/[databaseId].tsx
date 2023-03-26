import { supabase } from "@/libs/utils/supabaseClient"
import { NextApiRequest, NextApiResponse } from "next"

const databaseApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const databaseId = req.query.databaseId
    if (!databaseId) return
    const { data, error } = await supabase.from("objects").select("*").eq("database_id", databaseId)

    if (error) {
      return res.status(500).json({ message: error })
    }

    return res.status(200).json(data)
  }
}
export default databaseApi
