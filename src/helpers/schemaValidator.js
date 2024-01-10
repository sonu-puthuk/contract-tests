import Ajv from "ajv";

export class SchemaValidator {

    ajv = new Ajv({ allErrors: true })
    validate(schema, jsonObj) {
        const validate = this.ajv.compile(schema);

        const isValid = validate(jsonObj);
        if (!isValid) console.log(validate.errors);
        return { isValid, validate };
    }
}