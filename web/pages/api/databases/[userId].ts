import { supabase } from "@/libs/utils/supabaseClient"
import { swrType } from "@/types/swr"
import { PostgrestError } from "@supabase/supabase-js"
import { NextApiRequest, NextApiResponse } from "next"

const databaseApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const userId = req.query.userId
    if (!userId) return
    const { data, error }: swrType = await supabase
      .from("databases")
      .select("*")
      .eq("user_id", userId)

    if (error) {
      return res.status(500).json({ message: error })
    }

    return res.status(200).json(data)
  }
}
export default databaseApi
