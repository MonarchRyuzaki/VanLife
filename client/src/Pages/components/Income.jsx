import React from 'react'
import { requireAuth } from '../../utils';
import incomeImg from "../../assets/images/income-graph.png";

export async function loader({request}){
  return await requireAuth(request);
}

function Income({}) {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
]
  return (
    <div className="bg-[#FFF7ED] flex justify-center items-start px-6 sm:px-16 min-h-[100vh]">
      <div className="w-full xl:max-w-[1280px] mt-[150px]">
      <section className="host-income">
            <h1>Income</h1>
            <p>
                Last <span>30 days</span>
            </p>
            <h2>$2,260</h2>
            <img
                className="graph"
                src={incomeImg}
                alt="Income graph"
            />
            <div className="info-header">
                <h3>Your transactions (3)</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="transactions">
                {transactionsData.map((item) => (
                    <div key={item.id} className="transaction">
                        <h3>${item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
      </div>
    </div>
  )
}

export default Income