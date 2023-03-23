import { Object } from "./object"
export type Database = {
  id: string
  name: string
  profile_id: string
  created_at: string
  object: Object[]
}
