import { useState, useEffect } from "react"
import { supabase } from "../libs/utils/supabaseClient"
import useAuthUser from "./useAuthUser"
import { useProfileFromUserId } from "./useProfileFromUserId"
import { Database } from "@/types/database"

export const useDatabaseFromUserId = (userId: string) => {
  const [name, setName] = useState<string>("")
  const [id, setId] = useState<string>("")
  const profile = useProfileFromUserId(userId)
  const uProfile = profile.userProfile
  const [profileId, setProfileId] = useState<string>(profile.userProfile.id)
  const [created_at, setCreated_at] = useState<string>("")
  // const defaultData = {
  //   id: "",
  //   name: "",
  //   profile_id: "",
  //   created_at: "",
  // }
  const [database, setDatabase] = useState<Database[]>([])

  // const profileId = profile.id

  const getDatabase = async () => {
    try {
      const { data, error } = await supabase
        .from("database")
        .select("id,name,profile_id,created_at")
        .eq("profile_id", profileId)
      if (error) {
        throw error
      }
      setDatabase(data as Database[])
    } catch (error) {
      console.error("Failed to get profile:", error)
      setDatabase([])
    }
  }

  useEffect(() => {
    if (profile) {
      getDatabase()
    } else {
      setDatabase([])
    }
  }, [profileId])

  // useEffect(() => {
  //   if (database) {
  //     setId(database.id)
  //     setName(database.name)
  //     setProfileId(database.profile_id)
  //     setCreated_at(database.created_at)
  //   } else {
  //     setId("")
  //     setName("")
  //     setProfileId("")
  //     setCreated_at("")
  //   }
  // }, [database])

  // return {
  //   id,
  //   name,
  //   profileId,
  //   created_at,
  // }

  return {
    database,
  }
}
