import { int } from "commodo-fields-int";
import { withFields, WithFieldsError } from "@commodo/fields";

import { compose } from "ramda";

const Model = compose(withFields({ attribute: int() }))();

test("should accept int values", () => {
    const model = new Model();

    model.attribute = 5;
    expect(model.attribute).toEqual(5);

    model.attribute = 0;
    expect(model.attribute).toEqual(0);

    model.attribute = 1;
    expect(model.attribute).toEqual(1);

    model.attribute = 99999999;
    expect(model.attribute).toEqual(99999999);

    model.attribute = null;
    expect(model.attribute).toEqual(null);

    model.attribute = undefined;
    expect(model.attribute).not.toBeDefined();
});

["1", "0", "0.5", {}, 0.6, 0.2, 2.1, 2.01, [], true, false, Infinity, -Infinity].forEach(value => {
    test(`shouldn't accept ${typeof value}`, async () => {
        const model = new Model();

        let error = null;
        try {
            model.attribute = value;
        } catch (e) {
            error = e;
        }

        expect(error).toBeInstanceOf(WithFieldsError);
        expect(error.code).toEqual(WithFieldsError.FIELD_DATA_TYPE_ERROR);
    });
});

test("should be able to add ints and set the total as a new value", () => {
    const model = new Model();

    model.attribute = 5;
    expect(model.attribute).toEqual(5);

    model.attribute = model.attribute + 5;
    expect(model.attribute).toEqual(10);

    model.attribute += 5;
    expect(model.attribute).toEqual(15);
});
