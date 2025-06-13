import axios from 'axios';

const fetchGet = async () => {
    try {
        const response = await axios.get('https://bfarm-api.noip.in.th/mac"_id"');
        return response.data;
    } catch (error) {
        return error;
    }
};

type TaskProps = {
    "name": string;
    "status": string;
    "timestamp": number;
    "_id": number;
};

export const demo_task: (TaskProps)[] = [
    { "_id": 1, "name": "ฉีดวัคซีน MorrhaTic Ticaegia", "status": "completed", "timestamp": 1748786064 },
    { "_id": 2, "name": "ตรวจสุขภาพควาย", "status": "pending", "timestamp": 1748307196 },
    { "_id": 3, "name": "จัดทำบันทึกสุขภาพควาย", "status": "completed", "timestamp": 1750652573 },
    { "_id": 4, "name": "เปลี่ยนฟางในโรงเรือน", "status": "completed", "timestamp": 1750568398 },
    { "_id": 5, "name": "ชั่งน้ำหนักควาย 28 ตัว", "status": "completed", "timestamp": 1748585628 },
    { "_id": 6, "name": "เก็บขี้ควาย", "status": "pending", "timestamp": 1750658470 },
    { "_id": 7, "name": "ซ่อมหลังคาโรงเรือน", "status": "completed", "timestamp": 1748776064 },
    { "_id": 8, "name": "ตัดเล็บเท้าควาย 5 ตัว", "status": "pending", "timestamp": 1748348121 },
    { "_id": 9, "name": "ชั่งน้ำหนักควาย 28 ตัว", "status": "completed", "timestamp": 1749482089 },
    { "_id": 10, "name": "เก็บขี้ควาย", "status": "pending", "timestamp": 1750484068 },
    { "_id": 11, "name": "ตรวจสุขภาพควาย", "status": "pending", "timestamp": 1748723819 },
    { "_id": 12, "name": "ให้อาหารเสริมโปรตีน", "status": "pending", "timestamp": 1750744118 },
    { "_id": 13, "name": "เก็บตัวอย่างมูลส่งแลป", "status": "pending", "timestamp": 1749248791 },
    { "_id": 14, "name": "ชั่งน้ำหนักควาย 28 ตัว", "status": "completed", "timestamp": 1748966422 },
    { "_id": 15, "name": "ให้อาหารเสริมโปรตีน", "status": "pending", "timestamp": 1749211482 },
    { "_id": 16, "name": "ซ่อมแซมรั้วคอกควาย", "status": "completed", "timestamp": 1749840344 },
    { "_id": 17, "name": "ฉีดวัคซีน Haemorrhagic Septicaemia", "status": "pending", "timestamp": 1750354622 },
    { "_id": 18, "name": "ชั่งน้ำหนักควาย 28 ตัว", "status": "completed", "timestamp": 1748797015 },
    { "_id": 19, "name": "ล้างบ่อเก็บน้ำ", "status": "pending", "timestamp": 1749311802 },
    { "_id": 20, "name": "ซ่อมแซมรั้วคอกควาย", "status": "completed", "timestamp": 1749519809 },
    { "_id": 21, "name": "ซ่อมหลังคาโรงเรือน", "status": "pending", "timestamp": 1749239124 },
    { "_id": 22, "name": "ชั่งน้ำหนักควาย 28 ตัว", "status": "completed", "timestamp": 1750200526 },
    { "_id": 23, "name": "เก็บขี้ควาย", "status": "pending", "timestamp": 1750746346 },
    { "_id": 24, "name": "จัดทำบันทึกสุขภาพควาย", "status": "pending", "timestamp": 1748177521 },
    { "_id": 25, "name": "เก็บขี้ควาย", "status": "completed", "timestamp": 1748738808 },
    { "_id": 26, "name": "ตัดเล็บเท้าควาย 5 ตัว", "status": "pending", "timestamp": 1749116904 },
    { "_id": 27, "name": "เก็บขี้ควาย", "status": "completed", "timestamp": 1750262362 },
    { "_id": 28, "name": "เก็บขี้ควาย", "status": "pending", "timestamp": 1748349228 },
    { "_id": 29, "name": "ซ่อมแซมรั้วคอกควาย", "status": "completed", "timestamp": 1750519651 },
    { "_id": 30, "name": "เก็บตัวอย่างเลือดควาย 3 ตัว", "status": "pending", "timestamp": 1750378923 },
    { "_id": 31, "name": "ฉีดวัคซีน MorrhaTic Ticaegia", "status": "pending", "timestamp": 1750814305 },
    { "_id": 32, "name": "ตรวจวัดอุณหภูมิคอก", "status": "completed", "timestamp": 1748840344 },
    { "_id": 33, "name": "จัดทำบันทึกสุขภาพควาย", "status": "completed", "timestamp": 1750140769 },
    { "_id": 34, "name": "ให้อาหารเสริมโปรตีน", "status": "completed", "timestamp": 1748466270 },
    { "_id": 35, "name": "ล้างบ่อเก็บน้ำ", "status": "completed", "timestamp": 1750620677 },
    { "_id": 36, "name": "เก็บตัวอย่างมูลส่งแลป", "status": "completed", "timestamp": 1750706130 },
    { "_id": 37, "name": "อาบน้ำควาย 10 ตัว", "status": "pending", "timestamp": 1749166077 },
    { "_id": 38, "name": "เก็บตัวอย่างมูลส่งแลป", "status": "pending", "timestamp": 1750822335 },
    { "_id": 39, "name": "เก็บขี้ควาย", "status": "completed", "timestamp": 1750549114 },
    { "_id": 40, "name": "เปลี่ยนฟางในโรงเรือน", "status": "pending", "timestamp": 1749128045 },
    { "_id": 41, "name": "ชั่งน้ำหนักควาย 28 ตัว", "status": "pending", "timestamp": 1750369918 },
    { "_id": 42, "name": "ตรวจวัดอุณหภูมิคอก", "status": "pending", "timestamp": 1749840344 },
    { "_id": 43, "name": "อาบน้ำควาย 10 ตัว", "status": "completed", "timestamp": 1748878462 },
    { "_id": 44, "name": "เก็บขี้ควาย", "status": "pending", "timestamp": 1749770037 },
    { "_id": 45, "name": "ซ่อมหลังคาโรงเรือน", "status": "pending", "timestamp": 1750496257 },
    { "_id": 46, "name": "เก็บตัวอย่างมูลส่งแลป", "status": "pending", "timestamp": 1749547676 },
    { "_id": 47, "name": "ให้อาหารหยาบ", "status": "pending", "timestamp": 1750542949 },
    { "_id": 48, "name": "ฉีดวัคซีน Haemorrhagic Septicaemia", "status": "completed", "timestamp": 1750678055 },
    { "_id": 49, "name": "เปลี่ยนฟางในโรงเรือน", "status": "completed", "timestamp": 1750585597 },
    { "_id": 50, "name": "เก็บขี้ควาย", "status": "pending", "timestamp": 1749528169 }
]

export default fetchGet