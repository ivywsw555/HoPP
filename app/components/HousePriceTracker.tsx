import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Home, MapPin } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Inside your component:
const HousePriceTracker = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedCity, setSelectedCity] = useState('all');

    // Sample data remains the same
    const houses = {
        'shanghai-1': {
            id: '1210125906',
            city: '上海',
            district: '青浦',
            address: 'XLBoloc',
            data: [
                {
                    "date": "2024-10-08",
                    "area": 89.99,
                    "totalPrice": 250.0,
                    "pricePerSqm": 27781.0
                },
                {
                    "date": "2024-08-24",
                    "area": 81.89,
                    "totalPrice": 218.0,
                    "pricePerSqm": 26622.0
                },
                {
                    "date": "2024-07-14",
                    "area": 89.53,
                    "totalPrice": 293.0,
                    "pricePerSqm": 32823.0
                },
                {
                    "date": "2024-07-07",
                    "area": 81.88,
                    "totalPrice": 237.0,
                    "pricePerSqm": 28994.0
                },
                {
                    "date": "2024-06-02",
                    "area": 81.88,
                    "totalPrice": 215.0,
                    "pricePerSqm": 26258.0
                },
                {
                    "date": "2024-05-23",
                    "area": 87.0,
                    "totalPrice": 282.0,
                    "pricePerSqm": 32414.0
                },
                {
                    "date": "2024-04-28",
                    "area": 81.66,
                    "totalPrice": 224.0,
                    "pricePerSqm": 27431.0
                },
                {
                    "date": "2024-03-15",
                    "area": 89.99,
                    "totalPrice": 258.0,
                    "pricePerSqm": 28670.0
                },
                {
                    "date": "2024-01-30",
                    "area": 120.03,
                    "totalPrice": 432.0,
                    "pricePerSqm": 35992.0
                }
            ]
        },
        'shanghai-2': {
            id: '1210330908',
            city: '上海',
            district: '浦东',
            address: 'XDGarden',
            data: [
                {
                    "date": "2024-05-29",
                    "area": 100.03,
                    "totalPrice": 818.0,
                    "pricePerSqm": 81776.0
                },
                {
                    "date": "2023-05-23",
                    "area": 185.51,
                    "totalPrice": 1280.0,
                    "pricePerSqm": 68999.0
                },
                {
                    "date": "2023-03-26",
                    "area": 85.1,
                    "totalPrice": 730.0,
                    "pricePerSqm": 85782.0
                },
                {
                    "date": "2023-03-09",
                    "area": 185.87,
                    "totalPrice": 1195.0,
                    "pricePerSqm": 64293.0
                },
                {
                    "date": "2022-10-01",
                    "area": 85.27,
                    "totalPrice": 675.0,
                    "pricePerSqm": 79161.0
                },
                {
                    "date": "2022-07-17",
                    "area": 98.41,
                    "totalPrice": 982.0,
                    "pricePerSqm": 99787.0
                },
                {
                    "date": "2021-12-12",
                    "area": 155.56,
                    "totalPrice": 1150.0,
                    "pricePerSqm": 73927.0
                },
                {
                    "date": "2021-01-25",
                    "area": 173.51,
                    "totalPrice": 1060.0,
                    "pricePerSqm": 61092.0
                },
                {
                    "date": "2020-12-28",
                    "area": 85.27,
                    "totalPrice": 580.0,
                    "pricePerSqm": 68020.0
                },
                {
                    "date": "2020-05-04",
                    "area": 85.27,
                    "totalPrice": 560.0,
                    "pricePerSqm": 65674.0
                },
                {
                    "date": "2019-11-12",
                    "area": 162.4,
                    "totalPrice": 760.0,
                    "pricePerSqm": 46799.0
                },
                {
                    "date": "2019-05-23",
                    "area": 185.51,
                    "totalPrice": 902.0,
                    "pricePerSqm": 48623.0
                },
                {
                    "date": "2018-06-06",
                    "area": 100.03,
                    "totalPrice": 762.0,
                    "pricePerSqm": 76178.0
                },
                {
                    "date": "2018-05-13",
                    "area": 85.1,
                    "totalPrice": 583.0,
                    "pricePerSqm": 68508.0
                },
                {
                    "date": "2017-10-15",
                    "area": 85.1,
                    "totalPrice": 582.0,
                    "pricePerSqm": 68391.0
                },
                {
                    "date": "2017-03-01",
                    "area": 85.1,
                    "totalPrice": 578.0,
                    "pricePerSqm": 67921.0
                },
                {
                    "date": "2016-01-16",
                    "area": 100.3,
                    "totalPrice": 630.0,
                    "pricePerSqm": 62812.0
                }
            ]
        },
        'shanghai-3': {
            id: '1210627786',
            city: '上海',
            district: '黄浦',
            address: '271',
            data: [
                {
                    "date": "2024-11-16",
                    "area": 39.86,
                    "totalPrice": 432.0,
                    "pricePerSqm": 108380.0
                },
                {
                    "date": "2024-05-29",
                    "area": 75.61,
                    "totalPrice": 780.0,
                    "pricePerSqm": 103161.0
                },
                {
                    "date": "2024-03-03",
                    "area": 46.5,
                    "totalPrice": 442.0,
                    "pricePerSqm": 95054.0
                },
                {
                    "date": "2024-01-29",
                    "area": 21.25,
                    "totalPrice": 252.0,
                    "pricePerSqm": 118824.0
                },
                {
                    "date": "2023-11-04",
                    "area": 23.6,
                    "totalPrice": 265.0,
                    "pricePerSqm": 112289.0
                },
                {
                    "date": "2023-02-23",
                    "area": 10.0,
                    "totalPrice": 239.0,
                    "pricePerSqm": 239000.0
                },
                {
                    "date": "2022-12-10",
                    "area": 10.0,
                    "totalPrice": 275.0,
                    "pricePerSqm": 275000.0
                },
                {
                    "date": "2022-10-24",
                    "area": 48.4,
                    "totalPrice": 665.0,
                    "pricePerSqm": 137397.0
                },
                {
                    "date": "2022-07-07",
                    "area": 21.25,
                    "totalPrice": 420.0,
                    "pricePerSqm": 197648.0
                },
                {
                    "date": "2022-06-28",
                    "area": 36.09,
                    "totalPrice": 523.0,
                    "pricePerSqm": 144916.0
                },
                {
                    "date": "2022-02-21",
                    "area": 69.24,
                    "totalPrice": 760.0,
                    "pricePerSqm": 109764.0
                },
                {
                    "date": "2021-12-07",
                    "area": 43.0,
                    "totalPrice": 520.0,
                    "pricePerSqm": 120931.0
                },
                {
                    "date": "2021-02-07",
                    "area": 22.0,
                    "totalPrice": 392.0,
                    "pricePerSqm": 178182.0
                },
                {
                    "date": "2020-12-16",
                    "area": 39.33,
                    "totalPrice": 520.0,
                    "pricePerSqm": 132215.0
                },
                {
                    "date": "2020-11-17",
                    "area": 61.4,
                    "totalPrice": 615.0,
                    "pricePerSqm": 100163.0
                },
                {
                    "date": "2020-11-02",
                    "area": 21.25,
                    "totalPrice": 360.0,
                    "pricePerSqm": 169412.0
                },
                {
                    "date": "2020-10-31",
                    "area": 35.7,
                    "totalPrice": 498.0,
                    "pricePerSqm": 139496.0
                },
                {
                    "date": "2020-10-23",
                    "area": 35.7,
                    "totalPrice": 498.0,
                    "pricePerSqm": 139496.0
                },
                {
                    "date": "2020-10-15",
                    "area": 50.75,
                    "totalPrice": 580.0,
                    "pricePerSqm": 114286.0
                },
                {
                    "date": "2020-09-13",
                    "area": 50.75,
                    "totalPrice": 575.0,
                    "pricePerSqm": 113301.0
                },
                {
                    "date": "2020-08-13",
                    "area": 37.0,
                    "totalPrice": 463.0,
                    "pricePerSqm": 125136.0
                },
                {
                    "date": "2020-07-26",
                    "area": 29.39,
                    "totalPrice": 418.0,
                    "pricePerSqm": 142226.0
                },
                {
                    "date": "2020-07-13",
                    "area": 38.26,
                    "totalPrice": 488.0,
                    "pricePerSqm": 127549.0
                },
                {
                    "date": "2020-06-22",
                    "area": 13.0,
                    "totalPrice": 235.0,
                    "pricePerSqm": 180770.0
                },
                {
                    "date": "2020-06-20",
                    "area": 11.2,
                    "totalPrice": 201.0,
                    "pricePerSqm": 179465.0
                },
                {
                    "date": "2020-04-15",
                    "area": 10.0,
                    "totalPrice": 159.0,
                    "pricePerSqm": 159500.0
                },
                {
                    "date": "2020-03-26",
                    "area": 46.5,
                    "totalPrice": 455.0,
                    "pricePerSqm": 97850.0
                },
                {
                    "date": "2020-03-22",
                    "area": 47.9,
                    "totalPrice": 488.0,
                    "pricePerSqm": 101879.0
                },
                {
                    "date": "2020-03-22",
                    "area": 44.8,
                    "totalPrice": 460.0,
                    "pricePerSqm": 102679.0
                },
                {
                    "date": "2020-03-16",
                    "area": 50.75,
                    "totalPrice": 428.0,
                    "pricePerSqm": 84335.0
                },
                {
                    "date": "2020-01-11",
                    "area": 33.78,
                    "totalPrice": 328.0,
                    "pricePerSqm": 97099.0
                },
                {
                    "date": "2020-01-09",
                    "area": 31.9,
                    "totalPrice": 336.0,
                    "pricePerSqm": 105330.0
                },
                {
                    "date": "2019-12-01",
                    "area": 48.48,
                    "totalPrice": 402.0,
                    "pricePerSqm": 82921.0
                },
                {
                    "date": "2019-10-31",
                    "area": 31.9,
                    "totalPrice": 320.0,
                    "pricePerSqm": 100314.0
                },
                {
                    "date": "2019-07-20",
                    "area": 35.7,
                    "totalPrice": 350.0,
                    "pricePerSqm": 98040.0
                },
                {
                    "date": "2019-03-22",
                    "area": 38.26,
                    "totalPrice": 370.0,
                    "pricePerSqm": 96707.0
                },
                {
                    "date": "2019-01-16",
                    "area": 29.39,
                    "totalPrice": 303.0,
                    "pricePerSqm": 103097.0
                },
                {
                    "date": "2018-08-06",
                    "area": 79.12,
                    "totalPrice": 664.0,
                    "pricePerSqm": 83924.0
                },
                {
                    "date": "2018-06-29",
                    "area": 35.7,
                    "totalPrice": 352.0,
                    "pricePerSqm": 98600.0
                },
                {
                    "date": "2017-09-10",
                    "area": 48.93,
                    "totalPrice": 468.0,
                    "pricePerSqm": 95647.0
                },
                {
                    "date": "2016-08-10",
                    "area": 48.39,
                    "totalPrice": 389.0,
                    "pricePerSqm": 80389.0
                },
                {
                    "date": "2016-05-21",
                    "area": 36.09,
                    "totalPrice": 200.0,
                    "pricePerSqm": 55418.0
                },
                {
                    "date": "2016-02-05",
                    "area": 39.33,
                    "totalPrice": 198.0,
                    "pricePerSqm": 50344.0
                }
            ]
        },
        'kunshan': {
            id: '1824081388',
            city: '昆山',
            district: '花桥',
            address: '万科',
            data: [
                {
                    "date": "2024-12-09",
                    "area": 85.78,
                    "totalPrice": 131.0,
                    "pricePerSqm": 15272.0
                },
                {
                    "date": "2024-12-08",
                    "area": 85.77,
                    "totalPrice": 103.0,
                    "pricePerSqm": 12009.0
                },
                {
                    "date": "2024-12-08",
                    "area": 86.2,
                    "totalPrice": 122.0,
                    "pricePerSqm": 14212.0
                },
                {
                    "date": "2024-12-06",
                    "area": 123.62,
                    "totalPrice": 153.0,
                    "pricePerSqm": 12418.0
                },
                {
                    "date": "2024-12-04",
                    "area": 66.97,
                    "totalPrice": 79.0,
                    "pricePerSqm": 11886.0
                },
                {
                    "date": "2024-12-02",
                    "area": 108.92,
                    "totalPrice": 185.0,
                    "pricePerSqm": 16985.0
                },
                {
                    "date": "2024-12-02",
                    "area": 91.98,
                    "totalPrice": 181.0,
                    "pricePerSqm": 19766.0
                },
                {
                    "date": "2024-12-02",
                    "area": 85.78,
                    "totalPrice": 130.0,
                    "pricePerSqm": 15156.0
                },
                {
                    "date": "2024-12-01",
                    "area": 66.1,
                    "totalPrice": 85.0,
                    "pricePerSqm": 12860.0
                },
                {
                    "date": "2024-11-29",
                    "area": 66.43,
                    "totalPrice": 73.0,
                    "pricePerSqm": 11065.0
                },
                {
                    "date": "2024-11-27",
                    "area": 85.44,
                    "totalPrice": 95.0,
                    "pricePerSqm": 11119.0
                },
                {
                    "date": "2024-11-26",
                    "area": 85.44,
                    "totalPrice": 111.0,
                    "pricePerSqm": 13072.0
                },
                {
                    "date": "2024-11-25",
                    "area": 84.89,
                    "totalPrice": 135.0,
                    "pricePerSqm": 15903.0
                },
                {
                    "date": "2024-11-23",
                    "area": 86.36,
                    "totalPrice": 102.0,
                    "pricePerSqm": 11812.0
                },
                {
                    "date": "2024-11-23",
                    "area": 104.84,
                    "totalPrice": 174.0,
                    "pricePerSqm": 16674.0
                },
                {
                    "date": "2024-11-21",
                    "area": 82.63,
                    "totalPrice": 105.0,
                    "pricePerSqm": 12708.0
                },
                {
                    "date": "2024-11-17",
                    "area": 88.32,
                    "totalPrice": 110.0,
                    "pricePerSqm": 12487.0
                },
                {
                    "date": "2024-11-17",
                    "area": 86.14,
                    "totalPrice": 126.0,
                    "pricePerSqm": 14721.0
                },
                {
                    "date": "2024-11-15",
                    "area": 87.96,
                    "totalPrice": 98.0,
                    "pricePerSqm": 11142.0
                },
                {
                    "date": "2024-11-15",
                    "area": 92.48,
                    "totalPrice": 109.0,
                    "pricePerSqm": 11787.0
                }
            ]
        },
        'suzhou': {
            id: '1822021659',
            city: '苏州',
            district: '姑苏区',
            address: '888',
            data: [
                {
                    "date": "2024-07-10",
                    "area": 218.96,
                    "totalPrice": 805.0,
                    "pricePerSqm": 36802.0
                },
                {
                    "date": "2024-04-27",
                    "area": 222.45,
                    "totalPrice": 610.0,
                    "pricePerSqm": 27422.0
                },
                {
                    "date": "2024-03-05",
                    "area": 200.68,
                    "totalPrice": 482.0,
                    "pricePerSqm": 24019.0
                },
                {
                    "date": "2023-12-07",
                    "area": 265.38,
                    "totalPrice": 1022.0,
                    "pricePerSqm": 38511.0
                },
                {
                    "date": "2023-09-23",
                    "area": 196.36,
                    "totalPrice": 612.0,
                    "pricePerSqm": 31168.0
                },
                {
                    "date": "2023-09-02",
                    "area": 200.41,
                    "totalPrice": 522.0,
                    "pricePerSqm": 26047.0
                },
                {
                    "date": "2023-06-26",
                    "area": 218.93,
                    "totalPrice": 748.0,
                    "pricePerSqm": 34167.0
                },
                {
                    "date": "2022-07-10",
                    "area": 200.0,
                    "totalPrice": 585.0,
                    "pricePerSqm": 29250.0
                },
                {
                    "date": "2022-06-25",
                    "area": 218.96,
                    "totalPrice": 725.0,
                    "pricePerSqm": 33112.0
                },
                {
                    "date": "2022-06-15",
                    "area": 200.08,
                    "totalPrice": 520.0,
                    "pricePerSqm": 25990.0
                },
                {
                    "date": "2022-04-23",
                    "area": 198.75,
                    "totalPrice": 524.0,
                    "pricePerSqm": 26365.0
                },
                {
                    "date": "2021-11-20",
                    "area": 223.73,
                    "totalPrice": 660.0,
                    "pricePerSqm": 29500.0
                },
                {
                    "date": "2021-11-20",
                    "area": 223.73,
                    "totalPrice": 660.0,
                    "pricePerSqm": 29500.0
                },
                {
                    "date": "2021-04-14",
                    "area": 215.0,
                    "totalPrice": 765.0,
                    "pricePerSqm": 35582.0
                },
                {
                    "date": "2021-01-18",
                    "area": 265.0,
                    "totalPrice": 772.0,
                    "pricePerSqm": 29144.0
                },
                {
                    "date": "2021-01-18",
                    "area": 265.0,
                    "totalPrice": 772.0,
                    "pricePerSqm": 29144.0
                },
                {
                    "date": "2020-12-12",
                    "area": 223.0,
                    "totalPrice": 566.0,
                    "pricePerSqm": 25382.0
                },
                {
                    "date": "2020-12-12",
                    "area": 223.0,
                    "totalPrice": 566.0,
                    "pricePerSqm": 25382.0
                },
                {
                    "date": "2020-10-07",
                    "area": 196.47,
                    "totalPrice": 507.0,
                    "pricePerSqm": 25856.0
                },
                {
                    "date": "2020-10-07",
                    "area": 196.47,
                    "totalPrice": 508.0,
                    "pricePerSqm": 25857.0
                },
                {
                    "date": "2020-10-07",
                    "area": 196.47,
                    "totalPrice": 508.0,
                    "pricePerSqm": 25857.0
                },
                {
                    "date": "2020-08-17",
                    "area": 265.0,
                    "totalPrice": 780.0,
                    "pricePerSqm": 29434.0
                },
                {
                    "date": "2020-08-17",
                    "area": 265.0,
                    "totalPrice": 780.0,
                    "pricePerSqm": 29434.0
                },
                {
                    "date": "2020-08-08",
                    "area": 223.0,
                    "totalPrice": 720.0,
                    "pricePerSqm": 32287.0
                },
                {
                    "date": "2020-08-08",
                    "area": 223.0,
                    "totalPrice": 720.0,
                    "pricePerSqm": 32287.0
                },
                {
                    "date": "2020-08-08",
                    "area": 223.0,
                    "totalPrice": 720.0,
                    "pricePerSqm": 32287.0
                },
                {
                    "date": "2020-07-19",
                    "area": 196.84,
                    "totalPrice": 536.0,
                    "pricePerSqm": 27231.0
                },
                {
                    "date": "2020-07-19",
                    "area": 196.84,
                    "totalPrice": 535.0,
                    "pricePerSqm": 27230.0
                },
                {
                    "date": "2020-07-19",
                    "area": 196.84,
                    "totalPrice": 536.0,
                    "pricePerSqm": 27231.0
                },
                {
                    "date": "2020-05-15",
                    "area": 200.58,
                    "totalPrice": 535.0,
                    "pricePerSqm": 26693.0
                },
                {
                    "date": "2020-05-15",
                    "area": 200.58,
                    "totalPrice": 535.0,
                    "pricePerSqm": 26693.0
                },
                {
                    "date": "2020-04-27",
                    "area": 200.0,
                    "totalPrice": 530.0,
                    "pricePerSqm": 26500.0
                },
                {
                    "date": "2020-04-27",
                    "area": 200.0,
                    "totalPrice": 530.0,
                    "pricePerSqm": 26500.0
                },
                {
                    "date": "2020-01-02",
                    "area": 212.0,
                    "totalPrice": 589.0,
                    "pricePerSqm": 27830.0
                },
                {
                    "date": "2019-12-25",
                    "area": 227.0,
                    "totalPrice": 680.0,
                    "pricePerSqm": 29956.0
                },
                {
                    "date": "2019-12-20",
                    "area": 227.98,
                    "totalPrice": 619.0,
                    "pricePerSqm": 27195.0
                },
                {
                    "date": "2019-11-26",
                    "area": 201.0,
                    "totalPrice": 487.0,
                    "pricePerSqm": 24269.0
                },
                {
                    "date": "2019-11-26",
                    "area": 201.0,
                    "totalPrice": 487.0,
                    "pricePerSqm": 24269.0
                },
                {
                    "date": "2019-07-19",
                    "area": 218.93,
                    "totalPrice": 660.0,
                    "pricePerSqm": 30147.0
                },
                {
                    "date": "2019-07-19",
                    "area": 218.93,
                    "totalPrice": 660.0,
                    "pricePerSqm": 30147.0
                },
                {
                    "date": "2019-07-16",
                    "area": 223.13,
                    "totalPrice": 688.0,
                    "pricePerSqm": 30835.0
                },
                {
                    "date": "2019-07-16",
                    "area": 223.13,
                    "totalPrice": 688.0,
                    "pricePerSqm": 30835.0
                },
                {
                    "date": "2019-06-04",
                    "area": 224.0,
                    "totalPrice": 592.0,
                    "pricePerSqm": 26429.0
                },
                {
                    "date": "2019-06-04",
                    "area": 224.0,
                    "totalPrice": 592.0,
                    "pricePerSqm": 26429.0
                },
                {
                    "date": "2019-05-11",
                    "area": 223.0,
                    "totalPrice": 326.0,
                    "pricePerSqm": 14619.0
                },
                {
                    "date": "2019-04-10",
                    "area": 424.0,
                    "totalPrice": 1099.0,
                    "pricePerSqm": 25943.0
                },
                {
                    "date": "2019-04-03",
                    "area": 220.0,
                    "totalPrice": 490.0,
                    "pricePerSqm": 22273.0
                },
                {
                    "date": "2019-04-03",
                    "area": 220.0,
                    "totalPrice": 490.0,
                    "pricePerSqm": 22273.0
                },
                {
                    "date": "2019-03-16",
                    "area": 218.96,
                    "totalPrice": 590.0,
                    "pricePerSqm": 26946.0
                },
                {
                    "date": "2019-03-16",
                    "area": 218.96,
                    "totalPrice": 590.0,
                    "pricePerSqm": 26946.0
                },
                {
                    "date": "2018-12-17",
                    "area": 196.84,
                    "totalPrice": 510.0,
                    "pricePerSqm": 25910.0
                },
                {
                    "date": "2018-08-29",
                    "area": 199.43,
                    "totalPrice": 505.0,
                    "pricePerSqm": 25323.0
                },
                {
                    "date": "2018-08-29",
                    "area": 199.43,
                    "totalPrice": 505.0,
                    "pricePerSqm": 25323.0
                },
                {
                    "date": "2018-04-18",
                    "area": 200.18,
                    "totalPrice": 485.0,
                    "pricePerSqm": 24229.0
                },
                {
                    "date": "2018-04-18",
                    "area": 200.18,
                    "totalPrice": 485.0,
                    "pricePerSqm": 24229.0
                },
                {
                    "date": "2017-05-22",
                    "area": 196.84,
                    "totalPrice": 525.0,
                    "pricePerSqm": 26672.0
                },
                {
                    "date": "2017-05-22",
                    "area": 196.84,
                    "totalPrice": 525.0,
                    "pricePerSqm": 26672.0
                },
                {
                    "date": "2017-05-02",
                    "area": 200.0,
                    "totalPrice": 420.0,
                    "pricePerSqm": 21000.0
                },
                {
                    "date": "2017-04-13",
                    "area": 199.6,
                    "totalPrice": 425.0,
                    "pricePerSqm": 21293.0
                },
                {
                    "date": "2015-11-15",
                    "area": 223.0,
                    "totalPrice": 455.0,
                    "pricePerSqm": 20404.0
                },
                {
                    "date": "2015-11-13",
                    "area": 227.0,
                    "totalPrice": 317.0,
                    "pricePerSqm": 13965.0
                },
                {
                    "date": "2015-09-16",
                    "area": 220.0,
                    "totalPrice": 314.0,
                    "pricePerSqm": 14318.0
                },
                {
                    "date": "2014-04-10",
                    "area": 200.0,
                    "totalPrice": 310.0,
                    "pricePerSqm": 15500.0
                }
            ]
        }
    };

    const cities = ['all', '上海', '昆山', '苏州'];
    // const cityNames = { all: '所有城市', '上海': '上海', '昆山': '昆山', '苏州': '苏州' };

    const filteredHouses = selectedCity === 'all'
        ? houses
        : Object.fromEntries(Object.entries(houses).filter(([_, h]) => h.city === selectedCity));
    interface Transaction {
        date: string;
        area: number;
        totalPrice: number;
        pricePerSqm: number;
    }
    type CityKey = 'all' | '上海' | '昆山' | '苏州';

    // Define the city names mapping
    const cityNames: Record<CityKey, string> = {
        'all': '全部',
        '上海': '上海',
        '昆山': '昆山',
        '苏州': '苏州'
    };
    interface House {
        id: string;
        city: string;
        district: string;
        address: string;
        name?: string; // Make name optional with ?
        data: {
            date: string;
            area: number;
            totalPrice: number;
            pricePerSqm: number;
        }[];
    }
    const HouseCard = ({ house }: { house: House }) => (
        <Card className="mb-4">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">{house.address}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {house.city} {house.district}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-64 sm:h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={house.data.slice().reverse()}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                            <XAxis dataKey="date" />
                            <YAxis
                                yAxisId="left"
                                orientation="left"
                                tickFormatter={(value) => `${value}万`}
                            />
                            <YAxis
                                yAxisId="right"
                                orientation="right"
                                tickFormatter={(value) => `${value}元/㎡`}
                            />
                            <Tooltip
                                formatter={(value, name) => [
                                    name === '总价' ? `${value}万` : `${value}元/㎡`,
                                    name === '总价' ? '总价 (万)' : '单价 (元/㎡)'
                                ]}
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--background))',
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: '6px'
                                }}
                            />
                            <Legend />
                            <Line
                                yAxisId="right"
                                type="monotone"
                                dataKey="pricePerSqm"
                                name="单价"
                                stroke="hsl(286, 60.50%, 48.60%)"
                                dot={{ r: 4 }}
                            />
                            <Line
                                yAxisId="left"
                                type="monotone"
                                dataKey="totalPrice"
                                name="总价"
                                stroke="hsl(var(--primary))"
                                dot={{ r: 4 }}
                            />

                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2 text-left font-medium">成交日期</th>
                                <th className="p-2 text-left font-medium">面积</th>
                                <th className="p-2 text-left font-medium">总价</th>
                                <th className="p-2 text-left font-medium">单价</th>
                            </tr>
                        </thead>
                        <tbody>
                            {house.data.slice(0, showAll ? undefined : 5).map((record, idx) => (
                                <tr key={idx} className="border-b hover:bg-muted/50">
                                    <td className="p-2">{record.date}</td>
                                    <td className="p-2">{record.area}㎡</td>
                                    <td className="p-2">{record.totalPrice}万</td>
                                    <td className="p-2">{record.pricePerSqm}元/㎡</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {house.data.length > 5 && (
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="w-full mt-2 p-2 text-sm text-muted-foreground hover:bg-muted/50 flex items-center justify-center"
                        >
                            {showAll ? (
                                <>
                                    收起 <ChevronUp className="ml-1 h-4 w-4" />
                                </>
                            ) : (
                                <>
                                    查看全部 ({house.data.length}) <ChevronDown className="ml-1 h-4 w-4" />
                                </>
                            )}
                        </button>
                    )}
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h1 className="text-2xl font-bold mb-4 sm:mb-0 flex items-center">
                    <Home className="w-6 h-6 mr-2" />
                    Tracking Once Per Day💜
                </h1>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="选择城市" />
                    </SelectTrigger>
                    <SelectContent>
                        {cities.map((city) => (
                            <SelectItem key={city} value={city}>
                                {cityNames[city as CityKey]}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {Object.entries(filteredHouses).map(([key, house]) => (
                    <HouseCard key={key} house={house} />
                ))}
            </div>
        </div>
    );
};

export default HousePriceTracker;