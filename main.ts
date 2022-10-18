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
    if (dht11_dht22.readData(dataType.temperature) >= 40) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
