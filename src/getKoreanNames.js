const sketch = require("sketch");
const { DataSupplier } = sketch;
const util = require("util");

const generateRandomName = require("./generateRandomName").default;

export function onStartup() {
  DataSupplier.registerDataSupplier("public.text", "한글 이름", "SupplyData");
}

export function onShutdown() {
  DataSupplier.deregisterDataSuppliers();
}

export function onSupplyData(context) {
  let dataKey = context.data.key;

  const items = util.toArray(context.data.items).map(sketch.fromNative);

  items.forEach((_, index) => {
    let data = generateRandomName();

    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}
