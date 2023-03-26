import { supabase } from "@/libs/utils/supabaseClient"
import { Td, Tr, useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { UpsertModal } from "./UpsertModal"

export type TableBody = {
  databaseId: string
}
type Item = {
  item_id: string
  database_id: string
  number: string
  name: string
  stock: string
  cost: string
  price: string
  created_at: string
}
export const TableBody = (props: TableBody) => {
  const { databaseId } = props
  const [objectId, setObjecttId] = useState<string>("")
  const [items, setItems] = useState<Item[]>()
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    if (databaseId) getItems(databaseId)
  }, [databaseId])
  const getItems = async (databaseId: string) => {
    let { data } = await supabase
      .from("items")
      .select("item_id,database_id,number,name,stock,cost,price,created_at")
      .eq("database_id", databaseId)
      .order("number")
    if (data) {
      setItems(data)
    }
  }
  return (
    <>
      {items ? (
        items.map((item: Item, index: any) => {
          return (
            <>
              <Tr
                key={item.item_id}
                onClick={() => {
                  onOpen()
                  console.log("item_id=>", item.item_id)
                  setObjecttId(item.item_id)
                }}
              >
                <Td>{item.number}</Td>
                <Td>{item.name}</Td>
                <Td _after={{ content: `"個"` }}>{item.stock}</Td>
                <Td _after={{ content: `"円"` }}>{item.cost}</Td>
                <Td _after={{ content: `"円"` }}>{item.price}</Td>
              </Tr>
              {objectId === item.item_id && (
                <UpsertModal
                  key={index}
                  isOpen={isOpen}
                  onClose={onClose}
                  item={item}
                  item_id={item.item_id}
                  number={item.number}
                  name={item.name}
                  stock={item.stock}
                  cost={item.cost}
                  price={item.price}
                  database_id={databaseId}
                />
              )}
            </>
          )
        })
      ) : (
        <Tr>
          <Td>項目がありません</Td>
        </Tr>
      )}
    </>
  )
}
