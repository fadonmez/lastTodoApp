import React from "react";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";

export default function Progress({ percentage }) {
  return (
    <Card className="w-full h-full border-none rounded-none bg-gradient-to-br from-blue-500 to-fuchsia-500 w">
      <CardBody className="items-center justify-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-52 h-52 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-5xl font-semibold text-white",
          }}
          value={percentage}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="items-center justify-center pt-0">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          {percentage} Pes etme
        </Chip>
      </CardFooter>
    </Card>
  );
}
