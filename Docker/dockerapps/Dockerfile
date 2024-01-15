#lấy xác máy về chạy node js
FROM node:18-alpine
#tương đương lệnh cd
WORKDIR /usr/src/app
# copy tất cả những file hay folder của máy windows vào trong máy docker/usr/src/app
COPY . .
#cài thư viện
RUN npm install
#cho app ra port 3000
EXPOSE 3000
#start server
CMD ["npm","run","start"]