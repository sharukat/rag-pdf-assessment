"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-is";
exports.ids = ["vendor-chunks/unist-util-is"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-is/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/unist-util-is/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convert: () => (/* binding */ convert),\n/* harmony export */   is: () => (/* binding */ is)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Parent} Parent\n */\n\n/**\n * @template Fn\n * @template Fallback\n * @typedef {Fn extends (value: any) => value is infer Thing ? Thing : Fallback} Predicate\n */\n\n/**\n * @callback Check\n *   Check that an arbitrary value is a node.\n * @param {unknown} this\n *   The given context.\n * @param {unknown} [node]\n *   Anything (typically a node).\n * @param {number | null | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} [parent]\n *   The node’s parent.\n * @returns {boolean}\n *   Whether this is a node and passes a test.\n *\n * @typedef {Record<string, unknown> | Node} Props\n *   Object to check for equivalence.\n *\n *   Note: `Node` is included as it is common but is not indexable.\n *\n * @typedef {Array<Props | TestFunction | string> | Props | TestFunction | string | null | undefined} Test\n *   Check for an arbitrary node.\n *\n * @callback TestFunction\n *   Check if a node passes a test.\n * @param {unknown} this\n *   The given context.\n * @param {Node} node\n *   A node.\n * @param {number | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | undefined} [parent]\n *   The node’s parent.\n * @returns {boolean | undefined | void}\n *   Whether this node passes the test.\n *\n *   Note: `void` is included until TS sees no return as `undefined`.\n */\n\n/**\n * Check if `node` is a `Node` and whether it passes the given test.\n *\n * @param {unknown} node\n *   Thing to check, typically `Node`.\n * @param {Test} test\n *   A check for a specific node.\n * @param {number | null | undefined} index\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} parent\n *   The node’s parent.\n * @param {unknown} context\n *   Context object (`this`) to pass to `test` functions.\n * @returns {boolean}\n *   Whether `node` is a node and passes a test.\n */\nconst is =\n  // Note: overloads in JSDoc can’t yet use different `@template`s.\n  /**\n   * @type {(\n   *   (<Condition extends string>(node: unknown, test: Condition, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &\n   *   (<Condition extends Props>(node: unknown, test: Condition, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &\n   *   (<Condition extends TestFunction>(node: unknown, test: Condition, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &\n   *   ((node?: null | undefined) => false) &\n   *   ((node: unknown, test?: null | undefined, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &\n   *   ((node: unknown, test?: Test, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => boolean)\n   * )}\n   */\n  (\n    /**\n     * @param {unknown} [node]\n     * @param {Test} [test]\n     * @param {number | null | undefined} [index]\n     * @param {Parent | null | undefined} [parent]\n     * @param {unknown} [context]\n     * @returns {boolean}\n     */\n    // eslint-disable-next-line max-params\n    function (node, test, index, parent, context) {\n      const check = convert(test)\n\n      if (\n        index !== undefined &&\n        index !== null &&\n        (typeof index !== 'number' ||\n          index < 0 ||\n          index === Number.POSITIVE_INFINITY)\n      ) {\n        throw new Error('Expected positive finite index')\n      }\n\n      if (\n        parent !== undefined &&\n        parent !== null &&\n        (!is(parent) || !parent.children)\n      ) {\n        throw new Error('Expected parent node')\n      }\n\n      if (\n        (parent === undefined || parent === null) !==\n        (index === undefined || index === null)\n      ) {\n        throw new Error('Expected both parent and index')\n      }\n\n      return looksLikeANode(node)\n        ? check.call(context, node, index, parent)\n        : false\n    }\n  )\n\n/**\n * Generate an assertion from a test.\n *\n * Useful if you’re going to test many nodes, for example when creating a\n * utility where something else passes a compatible test.\n *\n * The created function is a bit faster because it expects valid input only:\n * a `node`, `index`, and `parent`.\n *\n * @param {Test} test\n *   *   when nullish, checks if `node` is a `Node`.\n *   *   when `string`, works like passing `(node) => node.type === test`.\n *   *   when `function` checks if function passed the node is true.\n *   *   when `object`, checks that all keys in test are in node, and that they have (strictly) equal values.\n *   *   when `array`, checks if any one of the subtests pass.\n * @returns {Check}\n *   An assertion.\n */\nconst convert =\n  // Note: overloads in JSDoc can’t yet use different `@template`s.\n  /**\n   * @type {(\n   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &\n   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &\n   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &\n   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &\n   *   ((test?: Test) => Check)\n   * )}\n   */\n  (\n    /**\n     * @param {Test} [test]\n     * @returns {Check}\n     */\n    function (test) {\n      if (test === null || test === undefined) {\n        return ok\n      }\n\n      if (typeof test === 'function') {\n        return castFactory(test)\n      }\n\n      if (typeof test === 'object') {\n        return Array.isArray(test) ? anyFactory(test) : propsFactory(test)\n      }\n\n      if (typeof test === 'string') {\n        return typeFactory(test)\n      }\n\n      throw new Error('Expected function, string, or object as test')\n    }\n  )\n\n/**\n * @param {Array<Props | TestFunction | string>} tests\n * @returns {Check}\n */\nfunction anyFactory(tests) {\n  /** @type {Array<Check>} */\n  const checks = []\n  let index = -1\n\n  while (++index < tests.length) {\n    checks[index] = convert(tests[index])\n  }\n\n  return castFactory(any)\n\n  /**\n   * @this {unknown}\n   * @type {TestFunction}\n   */\n  function any(...parameters) {\n    let index = -1\n\n    while (++index < checks.length) {\n      if (checks[index].apply(this, parameters)) return true\n    }\n\n    return false\n  }\n}\n\n/**\n * Turn an object into a test for a node with a certain fields.\n *\n * @param {Props} check\n * @returns {Check}\n */\nfunction propsFactory(check) {\n  const checkAsRecord = /** @type {Record<string, unknown>} */ (check)\n\n  return castFactory(all)\n\n  /**\n   * @param {Node} node\n   * @returns {boolean}\n   */\n  function all(node) {\n    const nodeAsRecord = /** @type {Record<string, unknown>} */ (\n      /** @type {unknown} */ (node)\n    )\n\n    /** @type {string} */\n    let key\n\n    for (key in check) {\n      if (nodeAsRecord[key] !== checkAsRecord[key]) return false\n    }\n\n    return true\n  }\n}\n\n/**\n * Turn a string into a test for a node with a certain type.\n *\n * @param {string} check\n * @returns {Check}\n */\nfunction typeFactory(check) {\n  return castFactory(type)\n\n  /**\n   * @param {Node} node\n   */\n  function type(node) {\n    return node && node.type === check\n  }\n}\n\n/**\n * Turn a custom test into a test for a node that passes that test.\n *\n * @param {TestFunction} testFunction\n * @returns {Check}\n */\nfunction castFactory(testFunction) {\n  return check\n\n  /**\n   * @this {unknown}\n   * @type {Check}\n   */\n  function check(value, index, parent) {\n    return Boolean(\n      looksLikeANode(value) &&\n        testFunction.call(\n          this,\n          value,\n          typeof index === 'number' ? index : undefined,\n          parent || undefined\n        )\n    )\n  }\n}\n\nfunction ok() {\n  return true\n}\n\n/**\n * @param {unknown} value\n * @returns {value is Node}\n */\nfunction looksLikeANode(value) {\n  return value !== null && typeof value === 'object' && 'type' in value\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsd0JBQXdCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0VBQW9FO0FBQ2pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWEsZ0NBQWdDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5RkFBeUY7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLFlBQVk7QUFDWixnTEFBZ0wsZ0JBQWdCO0FBQ2hNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLE1BQU07QUFDckIsZUFBZSwyQkFBMkI7QUFDMUMsZUFBZSwyQkFBMkI7QUFDMUMsZUFBZSxTQUFTO0FBQ3hCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLFlBQVk7QUFDWixvTEFBb0wsZ0JBQWdCO0FBQ3BNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQ0FBc0M7QUFDakQsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQyx5QkFBeUI7O0FBRTVEOztBQUVBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGVBQWU7QUFDZjtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RCxpQkFBaUIsU0FBUztBQUMxQjs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9saWIvaW5kZXguanM/YmNkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIEZuXG4gKiBAdGVtcGxhdGUgRmFsbGJhY2tcbiAqIEB0eXBlZGVmIHtGbiBleHRlbmRzICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBpbmZlciBUaGluZyA/IFRoaW5nIDogRmFsbGJhY2t9IFByZWRpY2F0ZVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIENoZWNrXG4gKiAgIENoZWNrIHRoYXQgYW4gYXJiaXRyYXJ5IHZhbHVlIGlzIGEgbm9kZS5cbiAqIEBwYXJhbSB7dW5rbm93bn0gdGhpc1xuICogICBUaGUgZ2l2ZW4gY29udGV4dC5cbiAqIEBwYXJhbSB7dW5rbm93bn0gW25vZGVdXG4gKiAgIEFueXRoaW5nICh0eXBpY2FsbHkgYSBub2RlKS5cbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2luZGV4XVxuICogICBUaGUgbm9kZeKAmXMgcG9zaXRpb24gaW4gaXRzIHBhcmVudC5cbiAqIEBwYXJhbSB7UGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqICAgVGhlIG5vZGXigJlzIHBhcmVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIHRoaXMgaXMgYSBub2RlIGFuZCBwYXNzZXMgYSB0ZXN0LlxuICpcbiAqIEB0eXBlZGVmIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IE5vZGV9IFByb3BzXG4gKiAgIE9iamVjdCB0byBjaGVjayBmb3IgZXF1aXZhbGVuY2UuXG4gKlxuICogICBOb3RlOiBgTm9kZWAgaXMgaW5jbHVkZWQgYXMgaXQgaXMgY29tbW9uIGJ1dCBpcyBub3QgaW5kZXhhYmxlLlxuICpcbiAqIEB0eXBlZGVmIHtBcnJheTxQcm9wcyB8IFRlc3RGdW5jdGlvbiB8IHN0cmluZz4gfCBQcm9wcyB8IFRlc3RGdW5jdGlvbiB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFRlc3RcbiAqICAgQ2hlY2sgZm9yIGFuIGFyYml0cmFyeSBub2RlLlxuICpcbiAqIEBjYWxsYmFjayBUZXN0RnVuY3Rpb25cbiAqICAgQ2hlY2sgaWYgYSBub2RlIHBhc3NlcyBhIHRlc3QuXG4gKiBAcGFyYW0ge3Vua25vd259IHRoaXNcbiAqICAgVGhlIGdpdmVuIGNvbnRleHQuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqICAgQSBub2RlLlxuICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IFtpbmRleF1cbiAqICAgVGhlIG5vZGXigJlzIHBvc2l0aW9uIGluIGl0cyBwYXJlbnQuXG4gKiBAcGFyYW0ge1BhcmVudCB8IHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqICAgVGhlIG5vZGXigJlzIHBhcmVudC5cbiAqIEByZXR1cm5zIHtib29sZWFuIHwgdW5kZWZpbmVkIHwgdm9pZH1cbiAqICAgV2hldGhlciB0aGlzIG5vZGUgcGFzc2VzIHRoZSB0ZXN0LlxuICpcbiAqICAgTm90ZTogYHZvaWRgIGlzIGluY2x1ZGVkIHVudGlsIFRTIHNlZXMgbm8gcmV0dXJuIGFzIGB1bmRlZmluZWRgLlxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYG5vZGVgIGlzIGEgYE5vZGVgIGFuZCB3aGV0aGVyIGl0IHBhc3NlcyB0aGUgZ2l2ZW4gdGVzdC5cbiAqXG4gKiBAcGFyYW0ge3Vua25vd259IG5vZGVcbiAqICAgVGhpbmcgdG8gY2hlY2ssIHR5cGljYWxseSBgTm9kZWAuXG4gKiBAcGFyYW0ge1Rlc3R9IHRlc3RcbiAqICAgQSBjaGVjayBmb3IgYSBzcGVjaWZpYyBub2RlLlxuICogQHBhcmFtIHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBpbmRleFxuICogICBUaGUgbm9kZeKAmXMgcG9zaXRpb24gaW4gaXRzIHBhcmVudC5cbiAqIEBwYXJhbSB7UGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gcGFyZW50XG4gKiAgIFRoZSBub2Rl4oCZcyBwYXJlbnQuXG4gKiBAcGFyYW0ge3Vua25vd259IGNvbnRleHRcbiAqICAgQ29udGV4dCBvYmplY3QgKGB0aGlzYCkgdG8gcGFzcyB0byBgdGVzdGAgZnVuY3Rpb25zLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgYG5vZGVgIGlzIGEgbm9kZSBhbmQgcGFzc2VzIGEgdGVzdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzID1cbiAgLy8gTm90ZTogb3ZlcmxvYWRzIGluIEpTRG9jIGNhbuKAmXQgeWV0IHVzZSBkaWZmZXJlbnQgYEB0ZW1wbGF0ZWBzLlxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoPENvbmRpdGlvbiBleHRlbmRzIHN0cmluZz4obm9kZTogdW5rbm93biwgdGVzdDogQ29uZGl0aW9uLCBpbmRleD86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudCB8IG51bGwgfCB1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBub2RlIGlzIE5vZGUgJiB7dHlwZTogQ29uZGl0aW9ufSkgJlxuICAgKiAgICg8Q29uZGl0aW9uIGV4dGVuZHMgUHJvcHM+KG5vZGU6IHVua25vd24sIHRlc3Q6IENvbmRpdGlvbiwgaW5kZXg/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnQgfCBudWxsIHwgdW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gbm9kZSBpcyBOb2RlICYgQ29uZGl0aW9uKSAmXG4gICAqICAgKDxDb25kaXRpb24gZXh0ZW5kcyBUZXN0RnVuY3Rpb24+KG5vZGU6IHVua25vd24sIHRlc3Q6IENvbmRpdGlvbiwgaW5kZXg/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnQgfCBudWxsIHwgdW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gbm9kZSBpcyBOb2RlICYgUHJlZGljYXRlPENvbmRpdGlvbiwgTm9kZT4pICZcbiAgICogICAoKG5vZGU/OiBudWxsIHwgdW5kZWZpbmVkKSA9PiBmYWxzZSkgJlxuICAgKiAgICgobm9kZTogdW5rbm93biwgdGVzdD86IG51bGwgfCB1bmRlZmluZWQsIGluZGV4PzogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IG5vZGUgaXMgTm9kZSkgJlxuICAgKiAgICgobm9kZTogdW5rbm93biwgdGVzdD86IFRlc3QsIGluZGV4PzogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IGJvb2xlYW4pXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV1cbiAgICAgKiBAcGFyYW0ge1Rlc3R9IFt0ZXN0XVxuICAgICAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2luZGV4XVxuICAgICAqIEBwYXJhbSB7UGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3BhcmVudF1cbiAgICAgKiBAcGFyYW0ge3Vua25vd259IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG4gICAgZnVuY3Rpb24gKG5vZGUsIHRlc3QsIGluZGV4LCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgICAgIGNvbnN0IGNoZWNrID0gY29udmVydCh0ZXN0KVxuXG4gICAgICBpZiAoXG4gICAgICAgIGluZGV4ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgaW5kZXggIT09IG51bGwgJiZcbiAgICAgICAgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgfHxcbiAgICAgICAgICBpbmRleCA8IDAgfHxcbiAgICAgICAgICBpbmRleCA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcG9zaXRpdmUgZmluaXRlIGluZGV4JylcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwYXJlbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBwYXJlbnQgIT09IG51bGwgJiZcbiAgICAgICAgKCFpcyhwYXJlbnQpIHx8ICFwYXJlbnQuY2hpbGRyZW4pXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwYXJlbnQgbm9kZScpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHBhcmVudCA9PT0gdW5kZWZpbmVkIHx8IHBhcmVudCA9PT0gbnVsbCkgIT09XG4gICAgICAgIChpbmRleCA9PT0gdW5kZWZpbmVkIHx8IGluZGV4ID09PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYm90aCBwYXJlbnQgYW5kIGluZGV4JylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvb2tzTGlrZUFOb2RlKG5vZGUpXG4gICAgICAgID8gY2hlY2suY2FsbChjb250ZXh0LCBub2RlLCBpbmRleCwgcGFyZW50KVxuICAgICAgICA6IGZhbHNlXG4gICAgfVxuICApXG5cbi8qKlxuICogR2VuZXJhdGUgYW4gYXNzZXJ0aW9uIGZyb20gYSB0ZXN0LlxuICpcbiAqIFVzZWZ1bCBpZiB5b3XigJlyZSBnb2luZyB0byB0ZXN0IG1hbnkgbm9kZXMsIGZvciBleGFtcGxlIHdoZW4gY3JlYXRpbmcgYVxuICogdXRpbGl0eSB3aGVyZSBzb21ldGhpbmcgZWxzZSBwYXNzZXMgYSBjb21wYXRpYmxlIHRlc3QuXG4gKlxuICogVGhlIGNyZWF0ZWQgZnVuY3Rpb24gaXMgYSBiaXQgZmFzdGVyIGJlY2F1c2UgaXQgZXhwZWN0cyB2YWxpZCBpbnB1dCBvbmx5OlxuICogYSBgbm9kZWAsIGBpbmRleGAsIGFuZCBgcGFyZW50YC5cbiAqXG4gKiBAcGFyYW0ge1Rlc3R9IHRlc3RcbiAqICAgKiAgIHdoZW4gbnVsbGlzaCwgY2hlY2tzIGlmIGBub2RlYCBpcyBhIGBOb2RlYC5cbiAqICAgKiAgIHdoZW4gYHN0cmluZ2AsIHdvcmtzIGxpa2UgcGFzc2luZyBgKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gdGVzdGAuXG4gKiAgICogICB3aGVuIGBmdW5jdGlvbmAgY2hlY2tzIGlmIGZ1bmN0aW9uIHBhc3NlZCB0aGUgbm9kZSBpcyB0cnVlLlxuICogICAqICAgd2hlbiBgb2JqZWN0YCwgY2hlY2tzIHRoYXQgYWxsIGtleXMgaW4gdGVzdCBhcmUgaW4gbm9kZSwgYW5kIHRoYXQgdGhleSBoYXZlIChzdHJpY3RseSkgZXF1YWwgdmFsdWVzLlxuICogICAqICAgd2hlbiBgYXJyYXlgLCBjaGVja3MgaWYgYW55IG9uZSBvZiB0aGUgc3VidGVzdHMgcGFzcy5cbiAqIEByZXR1cm5zIHtDaGVja31cbiAqICAgQW4gYXNzZXJ0aW9uLlxuICovXG5leHBvcnQgY29uc3QgY29udmVydCA9XG4gIC8vIE5vdGU6IG92ZXJsb2FkcyBpbiBKU0RvYyBjYW7igJl0IHlldCB1c2UgZGlmZmVyZW50IGBAdGVtcGxhdGVgcy5cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxDb25kaXRpb24gZXh0ZW5kcyBzdHJpbmc+KHRlc3Q6IENvbmRpdGlvbikgPT4gKG5vZGU6IHVua25vd24sIGluZGV4PzogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IG5vZGUgaXMgTm9kZSAmIHt0eXBlOiBDb25kaXRpb259KSAmXG4gICAqICAgKDxDb25kaXRpb24gZXh0ZW5kcyBQcm9wcz4odGVzdDogQ29uZGl0aW9uKSA9PiAobm9kZTogdW5rbm93biwgaW5kZXg/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnQgfCBudWxsIHwgdW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gbm9kZSBpcyBOb2RlICYgQ29uZGl0aW9uKSAmXG4gICAqICAgKDxDb25kaXRpb24gZXh0ZW5kcyBUZXN0RnVuY3Rpb24+KHRlc3Q6IENvbmRpdGlvbikgPT4gKG5vZGU6IHVua25vd24sIGluZGV4PzogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IG5vZGUgaXMgTm9kZSAmIFByZWRpY2F0ZTxDb25kaXRpb24sIE5vZGU+KSAmXG4gICAqICAgKCh0ZXN0PzogbnVsbCB8IHVuZGVmaW5lZCkgPT4gKG5vZGU/OiB1bmtub3duLCBpbmRleD86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudCB8IG51bGwgfCB1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBub2RlIGlzIE5vZGUpICZcbiAgICogICAoKHRlc3Q/OiBUZXN0KSA9PiBDaGVjaylcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1Rlc3R9IFt0ZXN0XVxuICAgICAqIEByZXR1cm5zIHtDaGVja31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodGVzdCkge1xuICAgICAgaWYgKHRlc3QgPT09IG51bGwgfHwgdGVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBva1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNhc3RGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGVzdCkgPyBhbnlGYWN0b3J5KHRlc3QpIDogcHJvcHNGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZnVuY3Rpb24sIHN0cmluZywgb3Igb2JqZWN0IGFzIHRlc3QnKVxuICAgIH1cbiAgKVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8UHJvcHMgfCBUZXN0RnVuY3Rpb24gfCBzdHJpbmc+fSB0ZXN0c1xuICogQHJldHVybnMge0NoZWNrfVxuICovXG5mdW5jdGlvbiBhbnlGYWN0b3J5KHRlc3RzKSB7XG4gIC8qKiBAdHlwZSB7QXJyYXk8Q2hlY2s+fSAqL1xuICBjb25zdCBjaGVja3MgPSBbXVxuICBsZXQgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgdGVzdHMubGVuZ3RoKSB7XG4gICAgY2hlY2tzW2luZGV4XSA9IGNvbnZlcnQodGVzdHNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIGNhc3RGYWN0b3J5KGFueSlcblxuICAvKipcbiAgICogQHRoaXMge3Vua25vd259XG4gICAqIEB0eXBlIHtUZXN0RnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBhbnkoLi4ucGFyYW1ldGVycykge1xuICAgIGxldCBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGNoZWNrcy5sZW5ndGgpIHtcbiAgICAgIGlmIChjaGVja3NbaW5kZXhdLmFwcGx5KHRoaXMsIHBhcmFtZXRlcnMpKSByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogVHVybiBhbiBvYmplY3QgaW50byBhIHRlc3QgZm9yIGEgbm9kZSB3aXRoIGEgY2VydGFpbiBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtQcm9wc30gY2hlY2tcbiAqIEByZXR1cm5zIHtDaGVja31cbiAqL1xuZnVuY3Rpb24gcHJvcHNGYWN0b3J5KGNoZWNrKSB7XG4gIGNvbnN0IGNoZWNrQXNSZWNvcmQgPSAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSAqLyAoY2hlY2spXG5cbiAgcmV0dXJuIGNhc3RGYWN0b3J5KGFsbClcblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gYWxsKG5vZGUpIHtcbiAgICBjb25zdCBub2RlQXNSZWNvcmQgPSAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSAqLyAoXG4gICAgICAvKiogQHR5cGUge3Vua25vd259ICovIChub2RlKVxuICAgIClcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCBrZXlcblxuICAgIGZvciAoa2V5IGluIGNoZWNrKSB7XG4gICAgICBpZiAobm9kZUFzUmVjb3JkW2tleV0gIT09IGNoZWNrQXNSZWNvcmRba2V5XSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG4vKipcbiAqIFR1cm4gYSBzdHJpbmcgaW50byBhIHRlc3QgZm9yIGEgbm9kZSB3aXRoIGEgY2VydGFpbiB0eXBlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGVja1xuICogQHJldHVybnMge0NoZWNrfVxuICovXG5mdW5jdGlvbiB0eXBlRmFjdG9yeShjaGVjaykge1xuICByZXR1cm4gY2FzdEZhY3RvcnkodHlwZSlcblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqL1xuICBmdW5jdGlvbiB0eXBlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZSAmJiBub2RlLnR5cGUgPT09IGNoZWNrXG4gIH1cbn1cblxuLyoqXG4gKiBUdXJuIGEgY3VzdG9tIHRlc3QgaW50byBhIHRlc3QgZm9yIGEgbm9kZSB0aGF0IHBhc3NlcyB0aGF0IHRlc3QuXG4gKlxuICogQHBhcmFtIHtUZXN0RnVuY3Rpb259IHRlc3RGdW5jdGlvblxuICogQHJldHVybnMge0NoZWNrfVxuICovXG5mdW5jdGlvbiBjYXN0RmFjdG9yeSh0ZXN0RnVuY3Rpb24pIHtcbiAgcmV0dXJuIGNoZWNrXG5cbiAgLyoqXG4gICAqIEB0aGlzIHt1bmtub3dufVxuICAgKiBAdHlwZSB7Q2hlY2t9XG4gICAqL1xuICBmdW5jdGlvbiBjaGVjayh2YWx1ZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgbG9va3NMaWtlQU5vZGUodmFsdWUpICYmXG4gICAgICAgIHRlc3RGdW5jdGlvbi5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJyA/IGluZGV4IDogdW5kZWZpbmVkLFxuICAgICAgICAgIHBhcmVudCB8fCB1bmRlZmluZWRcbiAgICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBvaygpIHtcbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3Vua25vd259IHZhbHVlXG4gKiBAcmV0dXJucyB7dmFsdWUgaXMgTm9kZX1cbiAqL1xuZnVuY3Rpb24gbG9va3NMaWtlQU5vZGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ3R5cGUnIGluIHZhbHVlXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-is/lib/index.js\n");

/***/ })

};
;