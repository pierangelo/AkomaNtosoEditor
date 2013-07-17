/*
 * 
 * esempio di test suite
 * 
 */

describe("StartupControllerSuite", function() {
    var startupController;
    var testNumber = 0;

    beforeEach(function() {
	startupController = new StartupController();

    });

    it("test OK", function() {

	expect(1).toEqual(1);

    });

    it("test KO", function() {

	expect(1).not.toEqual(1);

    });

    // /////////////////////////////////////////////////////////////////
    //
    // Tests
    //
    // /////////////////////////////////////////////////////////////////

    it("test [...]", function() {

	expect(1).not.toEqual(1);

    });

    // describe("test suite annidata...", function() {
    //
    // it("test case annidato...", function() {
    // expect(1).toBeFalsy();
    //
    // });
    //
    // });

    /*
     * esempi di test // demonstrates use of spies to intercept and test method
     * calls it("tells the current song if the user has made it a favorite",
     * function() { spyOn(song, 'persistFavoriteStatus');
     * 
     * player.play(song); player.makeFavorite();
     * 
     * expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true); });
     * 
     * //demonstrates use of expected exceptions describe("#resume", function() {
     * it("should throw an exception if song is already playing", function() {
     * player.play(song);
     * 
     * expect(function() { player.resume(); }).toThrow("song is already
     * playing"); }); });
     */
});