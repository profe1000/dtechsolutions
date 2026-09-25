import { ReactNode } from "react";
import {
  BankOutlined,
  CloudServerOutlined,
  LaptopOutlined,
  ReadOutlined,
} from "@ant-design/icons";

export const serviceCategoryIcons: Record<string, ReactNode> = {
  "consulting-training": <ReadOutlined />,
  "financial-business": <BankOutlined />,
  "infrastructure-business": <CloudServerOutlined />,
  "services-business": <LaptopOutlined />,
};
