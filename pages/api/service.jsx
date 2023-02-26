import { serviceData } from "@/app/data";

export default function handler(req, res) {
    res.status(200).json(serviceData)
}