import { supabase } from "@/libs/utils/supabaseClient"
import { NextApiRequest, NextApiResponse } from "next"

const everyoneApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const profileClass = req.query.class
    const profileStart_year = req.query.start_year
    const { data, error } = await supabase
      .from("profiles")
      .select("id,firstname,lastname,class_number,corps(corp_id,corp_name)")
      .eq("class", profileClass)
      .eq("start_year", profileStart_year)
      .order("class_number")

    if (error) {
      return res.status(500).json({ message: error })
    }

    return res.status(200).json(data)
  }
}
export default everyoneApi
