basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    false,
    false,
    true
    )
    led.plotBarGraph(
    dht11_dht22.readData(dataType.temperature),
    60
    )
    if (true) {
    	
    } else {
    	
    }
})
