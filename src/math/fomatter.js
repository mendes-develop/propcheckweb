const currencyFormatter = new Intl.NumberFormat( "en-US", {
    style: "currency",
    currency: "USD",
} );

const percentFormatter = new Intl.NumberFormat( "en-US", {
    style: 'percent',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
} );

const removeChar = ( value ) => {
    const removeChar = parseInt( value.replace( /[^0-9-]+/g, "" ) )

    if ( isNaN( removeChar ) ) return 0
    return removeChar / 100;
}

const convertToCurrency = ( num ) => {
    const number = removeChar( num )

    if ( !num || !number ) return ""
    return currencyFormatter.format( number )
}

export {
    currencyFormatter,
    percentFormatter,
    removeChar,
    convertToCurrency
}