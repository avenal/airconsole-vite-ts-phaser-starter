/**
 * An object containing a configuration for the RateLimiter constructor.
 * @typedef {object} RateLimiterConfig
 * @property {number|undefined} rate_limit - Maximum amount of AirConsole calls
 *           per second. Default is 25. Max is 25.
 * @property {number|undefined} no_rate_limit_for_first_calls - You can disable
 *           rate limiting for the first X calls during one second.
 *           The following calls will be slower during the first second, so we
 *           do not burst over the rate_limit. Default is 2. Max is 5.
 */
/**
 * The Rate Limiter helps you to send less than 25 messages per second.
 * It does this for messages and Custom Device States.
 * It sends data immediately in the beginning and then starts
 * rate limiting if the rate is too high: It merges the data together and
 * sends it in intervals so the rate limit is not exceeded.
 *
 * This is how the merging works when requests start being rate limited:
 * If you send { "a": 1, "b": 2 } and then {"a": 3, "c": 4}, the actual rate
 * limited message is merged to { "a": 3, "b": 2, "c": 4 }.
 * Note that all fields are present, but "a" was overwritten by a later
 * call while "b" was untouched by the later call and "c" was added
 * by the later call.
 *
 * Also note that because data might be delayed through rate limiting,
 * custom device states might not be immediately updated in the airconsole
 * object. Just use RateLimiter.getCustomDeviceState(device_id) instead which
 * merges the pending data of device states and returns up-to-date data.
 *
 * @param airconsole - The AirConsole object
 * @param airconsole - The constructor configuration.
 * @constructor
 */
declare function RateLimiter(airconsole: any, opts?: any): void;
declare class RateLimiter {
    /**
     * An object containing a configuration for the RateLimiter constructor.
     * @typedef {object} RateLimiterConfig
     * @property {number|undefined} rate_limit - Maximum amount of AirConsole calls
     *           per second. Default is 25. Max is 25.
     * @property {number|undefined} no_rate_limit_for_first_calls - You can disable
     *           rate limiting for the first X calls during one second.
     *           The following calls will be slower during the first second, so we
     *           do not burst over the rate_limit. Default is 2. Max is 5.
     */
    /**
     * The Rate Limiter helps you to send less than 25 messages per second.
     * It does this for messages and Custom Device States.
     * It sends data immediately in the beginning and then starts
     * rate limiting if the rate is too high: It merges the data together and
     * sends it in intervals so the rate limit is not exceeded.
     *
     * This is how the merging works when requests start being rate limited:
     * If you send { "a": 1, "b": 2 } and then {"a": 3, "c": 4}, the actual rate
     * limited message is merged to { "a": 3, "b": 2, "c": 4 }.
     * Note that all fields are present, but "a" was overwritten by a later
     * call while "b" was untouched by the later call and "c" was added
     * by the later call.
     *
     * Also note that because data might be delayed through rate limiting,
     * custom device states might not be immediately updated in the airconsole
     * object. Just use RateLimiter.getCustomDeviceState(device_id) instead which
     * merges the pending data of device states and returns up-to-date data.
     *
     * @param airconsole - The AirConsole object
     * @param airconsole - The constructor configuration.
     * @constructor
     */
    constructor(airconsole: any, opts?: any);
    airconsole: any;
    pending: {};
    rate: {};
    timeout: {};
    running_at_limit: {};
    rate_limit: number;
    no_rate_limit_for_first_calls: number;
    /**
     * This is the rate-limited version of AirConsole.message(device_id, data).
     * @param device_id
     * @param data
     */
    message(device_id: any, data: any): void;
    /**
     * Rate-limited version of AirConsole.broadcast(device_id).
     * @param data
     */
    broadcast(data: any): void;
    /**
     * Rate-limited version of AirConsole.setCustomDeviceState(data).
     * @param data
     */
    setCustomDeviceState(data: any): void;
    /**
     * Rate-limited version of AirConsole.setCustomDeviceStateProperty(key, value).
     * @param data
     */
    setCustomDeviceStateProperty(key: any, value: any): void;
    /**
     * Returns the up-to-date Custom Device State of a device, even if the data
     * was not yet sent. Equivalent to AirConsole.getCustomDeviceState(device_id)
     * without rate-limiting.
     * @param device_id
     * @returns {*}
     */
    getCustomDeviceState(device_id: any): any;
    private setCustomDeviceState_;
    private mergeData_;
    private send_;
}
/**
 * An object containing a configuration for the RateLimiter constructor.
 */
type RateLimiterConfig = {
    /**
     * - Maximum amount of AirConsole calls
     * per second. Default is 25. Max is 25.
     */
    rate_limit: number | undefined;
    /**
     * - You can disable
     * rate limiting for the first X calls during one second.
     * The following calls will be slower during the first second, so we
     * do not burst over the rate_limit. Default is 2. Max is 5.
     */
    no_rate_limit_for_first_calls: number | undefined;
};
