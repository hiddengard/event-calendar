export const rules = {
    required: (message: string = 'Обязательное поле') => ({
        required: true,
        message,
    }),
    /* 
            isDateAfter: (message: string) => () => ({
                validator(_: any, value: Dayjs) {
                    if (value.isSameOrAfter(dayjs())) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error(message));
                },
            }),
                */
};
