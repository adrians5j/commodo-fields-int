import { createField } from "@commodo/fields";
import withFieldDataTypeValidation from "@commodo/fields/fields/withFieldDataTypeValidation";

function int({ list, ...rest } = {}) {
    return withFieldDataTypeValidation(value => Number.isSafeInteger(value))(
        createField({ ...rest, list, type: "int" })
    );
}

export { int };
