/**
 * Created by Vahid on 09/06/15.
 */
/*
 *
 * A class holding a small list of unisex names (so they can fit any avatar)
 *
 * */
services.factory('nameGenerator', function () {

    // Keeping 20 unisex names to suite the avatars
    var nameGenerator = function () {

        this.names = ['Addison', 'Ash', 'Bailey', 'Bobbie', 'Brett', 'Brook',
            'Charlie', 'Daryl', 'Frankie', 'Gray', 'Hayden', 'Morgan', 'Rudy',
            'Taylor', 'Alex', 'West', 'Shannon', 'Ashley', 'Billy', 'Robin'];

    };


    //Giving a new name each time.
    nameGenerator.prototype.generateName = function () {
        var self = this;
        if (self.names.length) {
            var index = Math.floor(Math.random() * self.names.length);
            var item = self.names[index];
            self.names.splice(index, 1);

            return item;

        }
        return 'Dude'
    };


    return nameGenerator;
});

