import { fetcher } from "@/libs/utils/useSWR"
import { swrType } from "@/types/swr"
import { Td, Tr } from "@chakra-ui/react"
import useSWR from "swr"

export type TableBody = {
  databaseId: string
}
export const TableBody = (props: TableBody) => {
  const { databaseId } = props
  const { data: objects, error: objErr }: swrType = useSWR(`/api/objects/${databaseId}`, fetcher)
  return (
    <>
      {objects &&
        objects.map((item: any, index: any) => {
          // if (index !== 0) {
          return (
            <Tr key={index}>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
              <Td _after={{ content: `"個"` }}>{item.stock}</Td>
              <Td _after={{ content: `"円"` }}>{item.bought}</Td>
              <Td _after={{ content: `"円"` }}>{item.selling}</Td>
            </Tr>
          )
          // }
        })}
    </>
  )
}
