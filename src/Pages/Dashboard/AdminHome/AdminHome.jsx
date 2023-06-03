// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useAuth from "../../../Hook/useAuth";
import { FaWallet, FaPeopleCarry } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';



const AdminHome = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            return res.data;
        }
    })

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };




    return (
        <div>

            <section
                className="grid grid-cols-1  mx-auto  items-center  "
            >
                <div>
                    <h1 className="font-semibold text-left text-xl md:text-2xl lg:text-3xl mt-1">
                        Hi, Welcome <span className="text-xl md:text-2xl lg:text-3xl  text-transparent  bg-clip-text bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500  ">Back !!</span>
                    </h1>
                    <div
                        className=" mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mb-5"
                    >
                        <div className=" flex items-center gap-7 justify-center  bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 font-semibold rounded-lg shadow-md p-6">
                            <FaWallet className="w-9 h-9 text-white"></FaWallet>
                            <div className="">
                                <p className="text-white text-3xl">
                                    $<span id="deposit-total">{stats.revenue}</span>
                                </p>
                                <h3 className="text-2xl font-semibold text-white">Revenue</h3>
                            </div>
                        </div>
                        <div className=" flex items-center gap-7 justify-center  bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 font-semibold rounded-lg shadow-md p-6">
                            <FaPeopleCarry className="w-9 h-9 text-white"></FaPeopleCarry>
                            <div className="">
                                <p className="text-white text-3xl">
                                    <span id="deposit-total">{stats.users}</span>
                                </p>
                                <h3 className="text-2xl font-semibold text-white">Customers</h3>
                            </div>
                        </div>
                        <div className=" flex items-center gap-7 justify-center  bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 font-semibold rounded-lg shadow-md p-6">
                            <FaWallet className="w-9 h-9 text-white"></FaWallet>
                            <div className="">
                                <p className="text-white text-3xl">
                                    <span id="deposit-total">{stats.products}</span>
                                </p>
                                <h3 className="text-2xl font-semibold text-white">Products</h3>
                            </div>
                        </div>
                        <div className=" flex items-center gap-7 justify-center  bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 font-semibold rounded-lg shadow-md p-6">
                            <FaWallet className="w-9 h-9 text-white"></FaWallet>
                            <div className="">
                                <p className="text-white text-3xl">
                                    <span id="deposit-total">{stats.orders}</span>
                                </p>
                                <h3 className="text-2xl font-semibold text-white">Orders</h3>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <div className="block lg:flex">
                <div className="w-1/2 ">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Legend></Legend>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="count"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell name={entry.category} key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;