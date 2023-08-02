# Establecer la imagen base con Node.js
FROM node:18.16-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias del front-end..
COPY package*.json ./

RUN npm cache clean --force


# Verificar el contenido del directorio /app antes de continuar con la instalación
RUN ls

# Instalar las dependencias
RUN npm install 
## client -g

# Copiar los archivos del front-end al contenedor
COPY . .

# Comando para construir la aplicación de React (si es necesario)
# RUN npm run build

# Establece una variable de entorno para el puerto del cliente
ENV PORT=5173

# Expone el puerto en el que se ejecutará el cliente
EXPOSE $PORT

# Comando para iniciar el entorno de desarrollo del cliente
CMD ["sh", "-c", "npm run dev -- --port $PORT --host 0.0.0.0"]