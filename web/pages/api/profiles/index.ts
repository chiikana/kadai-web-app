import { supabase } from "@/libs/utils/supabaseClient"
import { Profile } from "@/types/profile"
import { swrType } from "@/types/swr"
import { PostgrestError } from "@supabase/supabase-js"
import { NextApiRequest, NextApiResponse } from "next"

const profileApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const userId = req.query.userId
    if (!userId) return
    const { data, error } = await supabase
      .from("profiles")
      .select("id,username,date_of_birth,created_at")
      .eq("id", userId)
      .single()

    if (error) {
      return res.status(500).json({ message: error })
    }

    return res.status(200).json(data)
  }
}
export default profileApi
