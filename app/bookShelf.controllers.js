import AddBookController from './addBook/AddBookController';
import ArchiveController from './archive/ArchiveController';
import HomeController from './home/homecontroller'

var moduleName='bookShelf.controllers';

angular.module(moduleName, [])
    .controller('bookShelf.homeController', HomeController)
    .controller('bookShelf.addBookController', AddBookController)
    .controller('bookShelf.archiveController', ArchiveController);
    
export default moduleName;