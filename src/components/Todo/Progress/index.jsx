import { useState, useEffect } from "react";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";

export default function Progress({ percentage }) {
  useEffect(() => {
    setPercent(percentage);
  }, [percentage]);
  const [percent, setPercent] = useState(percentage);
  const infoText = () => {
    if (percent > 100) {
      setPercent(100);
    }
    if (percent < 10) {
      return "Daha fazla çalışmalısın";
    } else if (percent < 30) {
      return "İyi gidiyorsun !";
    } else if (percent < 50) {
      return "Yolu neredeyse yarıladın!";
    } else if (percent < 70) {
      return "Çalışmaya devam!";
    } else if (percent < 85) {
      return "Çoğu gitti azı kaldı!";
    } else if (percent <= 95) {
      return "Son düzlüktesin!";
    } else if (percent == 100) {
      return "Tebrikler, tamamlandın!";
    }
  };
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
          İlerleme Yüzden : {percent.toFixed(0)} / {infoText()}
        </Chip>
      </CardFooter>
    </Card>
  );
}
