const fn = () => {
    const addEventListen = (val) => {
        console.log(val)
    }

    console.log('123')

    return {
        addEventListen
    }
}

fn().addEventListen('321')