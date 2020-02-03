export const timeGenerator = () => {
    let time = [];
    for (let i = 0; i < 24; i++) {
        if (i < 12) {
            if (i === 0) {
                time.push({
                    id: `${i}`,
                    value: `12:00AM`
                });
                continue
            }
            time.push({
                id: `${i}`,
                value: `${i}:00AM`
            });
        }
        else {
            if (i === 12) {
                time.push({
                    id: `${i}`,
                    value: `12:00PM`
                });
                continue
            }
            time.push({
                id: `${i}`,
                value: `${i - 12}:00PM`
            })
        }
    }
    return time;
};


