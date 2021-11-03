import haxe.Exception;
import tink.core.Error.ErrorCode;
import tink.unit.AssertionBuffer;

using tink.CoreApi;

/** Provides helper methods for creating assertions. **/
abstract class AssertionTools {

	/** Expects the specified promise to be rejected. **/
	public static function rejects(asserts: AssertionBuffer, promise: Promise<Any>, ?errorCode: ErrorCode): Promise<Noise>
		return promise.map(outcome -> switch outcome {
			case Success(_):
				asserts.assert(false, "Promise should reject.");
				Failure(new Error(ExpectationFailed, "Promise not rejected."));
			case Failure(e):
				asserts.assert(errorCode != null ? e.code == errorCode : true, errorCode != null
					? 'Promise should reject with a $errorCode error.'
					: "Promise should reject.");
				errorCode == null || e.code == errorCode
					? Success(Noise)
					: Failure(new Error(ExpectationFailed, 'Promise not rejected with a $errorCode error.'));
		});

	/** Expects the specified function to throw an exception. **/
	public static function throws(asserts: AssertionBuffer, func: () -> Void, ?exceptionClass: Class<Exception>)
		try { func(); asserts.fail("Exception not thrown."); }
		catch (e) asserts.assert(Std.isOfType(e, exceptionClass != null ? exceptionClass : Exception));
}
