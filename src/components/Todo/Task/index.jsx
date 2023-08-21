import { useContext, useState } from "react";
import { Card, CardBody, Checkbox } from "@nextui-org/react";
import { AiOutlineClose } from "react-icons/ai";
import sharedData from "../../../../context/data";
import axios from "axios";
import cn from "classnames";

export default function Task({ task }) {
  const { todos, fetchData } = useContext(sharedData);
  const [isChecked, setIsChecked] = useState(task.isFinished);

  const valueChange = async () => {
    try {
      // Checkbox durumunu güncelle
      setIsChecked(!isChecked);

      // API'ye gönderilecek güncellenmiş veri
      const updatedTask = { ...task, isFinished: !isChecked };

      // Task'ın API'ye gönderilmesi
      await axios.put(`http://localhost:3000/Todos/${task.id}`, updatedTask);

      // fetchData'yi çağırarak veriyi güncelle
      fetchData();
    } catch (error) {
      console.error("Güncelleme hatası:", error);
    }
  };

  return (
    <Card radius="none">
      <CardBody className="grid items-center justify-center grid-cols-12">
        <Checkbox
          isSelected={isChecked}
          className="col-span-1"
          color="primary"
          onValueChange={valueChange}
        ></Checkbox>
        <p className={cn("col-span-10", { "line-through": isChecked })}>
          {task.todo}
        </p>
        <button className="col-span-1 text-gray-300 transition-colors hover:text-red-500">
          <AiOutlineClose size={20} />
        </button>
      </CardBody>
    </Card>
  );
}
