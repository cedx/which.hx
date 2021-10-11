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
				asserts.assert(false, "Promise not rejected.");
				Failure(new Error(ExpectationFailed, "Promise not rejected."));
			case Failure(e):
				final message = errorCode != null ? 'Promise not rejected with a $errorCode error.' : "Promise not rejected.";
				asserts.assert(errorCode != null ? e.code == errorCode : true, message);
				errorCode == null || e.code == errorCode ? Success(Noise) : Failure(new Error(ExpectationFailed, message));
		});

	/** Expects the specified function to throw an exception. **/
	public static function throws(asserts: AssertionBuffer, func: () -> Void, ?exceptionClass: Class<Exception>)
		try { func(); asserts.fail("Exception not thrown."); }
		catch (e) asserts.assert(Std.isOfType(e, exceptionClass != null ? exceptionClass : Exception));
}
