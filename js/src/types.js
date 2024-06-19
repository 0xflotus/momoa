/**
 * @fileoverview  JSON AST types
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Typedefs
//-----------------------------------------------------------------------------

/** @typedef {import("./typedefs").Location} Location */
/** @typedef {import("./typedefs").NodeParts} NodeParts */
/** @typedef {import("./typedefs").DocumentNode} DocumentNode */
/** @typedef {import("./typedefs").StringNode} StringNode */
/** @typedef {import("./typedefs").NumberNode} NumberNode */
/** @typedef {import("./typedefs").BooleanNode} BooleanNode */
/** @typedef {import("./typedefs").MemberNode} MemberNode */
/** @typedef {import("./typedefs").ObjectNode} ObjectNode */
/** @typedef {import("./typedefs").ElementNode} ElementNode */
/** @typedef {import("./typedefs").ArrayNode} ArrayNode */
/** @typedef {import("./typedefs").NullNode} NullNode */
/** @typedef {import("./typedefs").ValueNode} ValueNode */

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

export const types = {

    /**
     * Creates a document node.
     * @param {ValueNode} body The body of the document.
     * @param {NodeParts} parts Additional properties for the node. 
     * @returns {DocumentNode} The document node.
     */
    document(body, parts = {}) {
        return {
            type: "Document",
            body,
            ...parts
        };
    },

    /**
     * Creates a string node.
     * @param {string} value The value for the string.
     * @param {NodeParts} parts Additional properties for the node. 
     * @returns {StringNode} The string node.
     */
    string(value, parts = {}) {
        return {
            type: "String",
            value,
            ...parts
        };
    },

    /**
     * Creates a number node.
     * @param {number} value The value for the number.
     * @param {NodeParts} parts Additional properties for the node. 
     * @returns {NumberNode} The number node.
     */
    number(value, parts = {}) {
        return {
            type: "Number",
            value,
            ...parts
        };
    },

    /**
     * Creates a boolean node.
     * @param {boolean} value The value for the boolean.
     * @param {NodeParts} parts Additional properties for the node. 
     * @returns {BooleanNode} The boolean node.
     */
    boolean(value, parts = {}) {
        return {
            type: "Boolean",
            value,
            ...parts
        };
    },

    /**
     * Creates a null node.
     * @param {NodeParts} parts Additional properties for the node. 
     * @returns {NullNode} The null node.
     */
    null(parts = {}) {
        return {
            type: "Null",
            ...parts
        };
    },

    /**
     * Creates an array node.
     * @param {Array<ElementNode>} elements The elements to add.
     * @param {NodeParts} parts Additional properties for the node. 
     * @returns {ArrayNode} The array node.
     */
    array(elements, parts = {}) {
        return {
            type: "Array",
            elements,
            ...parts
        };
    },

    /**
     * Creates an element node.
     * @param {ValueNode} value The value for the element.
     * @param {NodeParts} parts Additional properties for the node. 
     * @returns {ElementNode} The element node.
     */
    element(value, parts = {}) {
        return {
            type: "Element",
            value,
            ...parts
        };
    },

    /**
     * Creates an object node.
     * @param {Array<MemberNode>} members The members to add.
     * @param {NodeParts} parts Additional properties for the node. 
     * @returns {ObjectNode} The object node.
     */
    object(members, parts = {}) {
        return {
            type: "Object",
            members,
            ...parts
        };
    },

    /**
     * Creates a member node.
     * @param {StringNode} name The name for the member.
     * @param {ValueNode} value The value for the member.
     * @param {NodeParts} parts Additional properties for the node. 
     * @returns {MemberNode} The member node.
     */
    member(name, value, parts = {}) {
        return {
            type: "Member",
            name,
            value,
            ...parts
        };
    },

};
