import { fetcher } from "@/libs/utils/useSWR"
import useSWR from "swr"
import useAuthUser from "./useAuthUser"

const useProfile = () => {
  const { userId, profileId } = useAuthUser()

  const { data: profile, error } = useSWR(userId ? `/api/profiles?userId=${userId}` : null, fetcher)
  return {
    profile,
  }
}
export default useProfile
