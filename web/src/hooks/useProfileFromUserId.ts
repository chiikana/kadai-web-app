import { useState, useEffect } from "react"
import { Profile } from "@/types/profile"
import { supabase } from "../libs/utils/supabaseClient"
import useAuthUser from "./useAuthUser"

export const useProfileFromUserId = (userId: string) => {
  const [username, setUsername] = useState<string>("")
  const [id, setId] = useState<string>("")
  const [date_of_birth, setDate_of_birth] = useState<string>("")
  const [created_at, setCreated_at] = useState<string>("")
  const defaultProfile = {
    id: "",
    username: "",
    date_of_birth: "",
    created_at: "",
  }
  const [userProfile, setUserProfile] = useState<Profile | undefined>()

  const getProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("id,username,date_of_birth,created_at,database(id,name)")
        .eq("id", userId)
      if (error) {
        throw error
      }
      setUserProfile(data as Profile)
    } catch (error) {
      console.error("Failed to get profile:", error)
      setUserProfile()
    }
  }

  useEffect(() => {
    if (userId) {
      getProfile()
    } else {
      setUserProfile([])
    }
  }, [userId])

  // useEffect(() => {
  //   if (userProfile) {
  //     setId(userProfile.)
  //     setUsername(userProfile.username)
  //     setDate_of_birth(userProfile.date_of_birth)
  //     setCreated_at(userProfile.created_at)
  //   } else {
  //     setId("")
  //     setUsername("")
  //     setDate_of_birth("")
  //     setCreated_at("")
  //   }
  // }, [userProfile])

  // return {
  //   id,
  //   username,
  //   date_of_birth,
  //   created_at,
  // }
  return {
    userProfile,
  }
}
