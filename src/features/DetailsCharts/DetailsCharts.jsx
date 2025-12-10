import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { generateChartData } from '../../utils/home';

const DetailsCharts = ({ isAnimationActive = true }) => {
  const data = generateChartData({
    productsLength: 70,
    usersLength: 200,
    ticketsLength: 120,
    adminsLength: 1,
  });

  return (
    <div className="w-full flex justify-center items-center text-center mt-5 bg-white dark:bg-neutral-800 pb-7 pt-7 pr-7 rounded-3xl">
      <ResponsiveContainer width="100%" height={440}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorProducts" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0d5c63" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0d5c63" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#009f93" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#009f93" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00FFFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00FFFF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey={(d) => (d.name === 'تعداد محصولات' ? d.value : 0)}
            stroke="#0d5c63"
            fill="url(#colorProducts)"
            isAnimationActive={isAnimationActive}
            name="محصولات"
          />
          <Area
            type="monotone"
            dataKey={(d) => (d.name === 'تعداد کاربران' ? d.value : 0)}
            stroke="#009f93"
            fill="url(#colorUsers)"
            isAnimationActive={isAnimationActive}
            name="کاربران"
          />
          <Area
            type="monotone"
            dataKey={(d) => (d.name === 'تعداد تیکت ها' ? d.value : 0)}
            stroke="#00FFFF"
            fill="url(#colorTickets)"
            isAnimationActive={isAnimationActive}
            name="تیکت ها"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DetailsCharts;
