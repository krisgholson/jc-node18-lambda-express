# https://gallery.ecr.aws/lambda/nodejs (see usage)
FROM public.ecr.aws/lambda/nodejs:18.2022.11.15.11
WORKDIR ${LAMBDA_TASK_ROOT}
COPY web .
RUN npm install
CMD ["npm", "run", "serve"]
