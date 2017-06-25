# Customizing the command line
## What is the shell
##### Good ol' wikipedia:

A Unix shell is a command-line interpreter or shell that provides a traditional Unix-like command line user interface. Users direct the operation of the computer by entering commands as text for a command line interpreter to execute, or by creating text scripts of one or more such commands.


##### ...okay. What does that mean?

your shell interacts with the computer, and you terminal allows you to access the shell commands.

## Installing via the command line
Anyone using GNU/linux will probably be acquainted with installing things via the command line already.

Traditionally the install routine on GNU/linux systems involved the sequence of commands:
- `$ tar xvf <source-package>.tar.{gz,bz2}`
- `$ cd source-package/`
- `$ make config`
- `$ make`
- `# make install` or `$ sudo make install`

This sequence is invoking the GNU C Compiler or GCC to compile the source code into binaries.
In some cases the binaries being compiled need or take options or modifications to the above routine which are usually documentented in the README or other documentation included in the tarball.

If the software you want to install has not being packaged by any distribution (distro), that  
Nowadays, however, GNU/Linux(distro) have systems to package and distribute pieces of software and to integrate and verify their installations.
These systems are called Package Managers and are a collection of tools which manage the installation (with dependency resolution), upgrade, configuration and removal of packages.

They vary among various GNU/Linux distros.

- dpkg: Originally created by Debian developers and now used by Debian, Devuan, Ubuntu and Mint (among many others) Uses the .deb format and was the first to have a widely known dependency resolution tool, APT. The ncurses-based front-end for APT, aptitude, is also a popular package manager for Debian-based systems.

- pacman: Used in Arch Linux, Frugalware, DeLi Linux and Manjaro Its binary package format is a xz-compressed tar archive (file extension: .pkg.tar.xz) built using the makepkg utility (which comes bundled with pacman) and a specialized type of shell script called a PKGBUILD.

- RPM Package Manager: Created by Red Hat. RPM is the Linux Standard Base packaging format and the base of a number of additional tools, including apt4rpm, Red Hat's up2date, Mageia's urpmi, openSUSE's ZYpp (zypper), PLD Linux's poldek, Fedora's DNF, and YUM, which is used by Red Hat Enterprise Linux.

- Portage and emerge are used by Gentoo Linux, Funtoo Linux, and Sabayon Linux. It is inspired by the BSD ports system and uses text based "ebuilds" to automatically download, customize, build, and update packages from source code. It has automatic dependency checking and allows multiple versions of a software package to be installed into different "slots" on the same system. Portage also employs "use flags" to allow the user to fully customize a software build to suit the needs of their platform in an automated fashion. While source code distribution and customization is the preferred methodology, some larger packages that would take many hours to compile on a typical desktop computer are also offered as pre-compiled binaries in order to ease installation.

slackpkg and slapt-get, which are used by Slackware and [the latter] works with a binary package format that is essentially a xz-compressed tar archive with the file extension .txz.

All these are command line tools, but some of them have also GUI counterparts, such as the Ubuntu Software Center.

Some package managers *only* runs into GUI. A basic example of a package manager that a lot of people will have had access to is the app store on a mac or Steam (predominantly for video games but some software too). These are package managers that use a GUI for you to interact with them, you click to download packages, manage updates or uninstalls.

Back to package managers you will be using from the command line, so rather than clicking install on the app store, I'm opening command line and running `brew install node` (or any program you can install through the package manager you're using).
This is doing the same thing as clicking an "install" button on a gui, you're just doing it in the command line.

Common package managers are Homebrew/Linuxbrew `brew` (available also on OSX), Node Package Manager (bundled with node) `npm`, Advanced Package Tool (ususally used with the command `apt-get` on debian based distros).

You can use Atom Package Manager to install atom plugins too! So for something we did earlier: `apm install beautify`
Also Vim text editor has plugin managers, that are essentially package managers.

Sometimes installing things via the command line is as simple as running `brew install <thing-i-want-to-install>`, sometimes, especially if it's something that will run in terminal you will have to edit your rc file, essentially to point your terminal at the directory where the files for the program are located.

##### why do this?
we tend to navigate files in the command line rather than using a gui because it is faster, the same is often true with installing programs and plugins. Using the example of `apm install beautify`, this is a super quick thing to type which immediately works, in order to do this in atom I have to open my settings, go to my settings, go to install, search for the packages and click install.

Also a lot of open source software is only available to install via command line, and open source is well good.

## Modifying the shell

Most people will be using Bash shell, an alternative being ZShell, among others
The `tab` key (and double `tab` sequence) in most shells activates the autocompletion function(s), remember: `tab` is your friend.

Both the shells on startup parse the so called rc files, being it .bashrc .zshrc .bash_profile or .profile.
These text files are a direct way to change the way your terminal behaves, they are hidden in the home directory, in order to view them in a GUI file manager use ctrl+h or cmd+h.
In a terminal `ls` will list the files, but hidden files will still not show, use `ls -a`and you will see all hidden files in your current directory.

A great thing in here are aliases. An alias basically is a preset shortcut.
So you could for example set `gc` to run `git commit` to save you from typing it (since you'll probably type it a lot). Make sure anything you're using as an alias does not already exist as a command.

To create an alias open your .bashrc or .zshrc in your favourite text editor and create a new line at the end with ```alias <alias-name>="<command>"``` **no spaces before or after the = sign**

Be very careful when editing your rc file, don't put random things in there, make sure you know what everything that you have written does.

Comments in your rc file are done like this ```# Hi I'm a comment```. It's always good to comment your code, but especially in here so you can remember why you have done what you've done, and what the commands you're aliasing actually do.

##### Colours...

You can customize colours and such in your rc file too, but it's much easier to do through editing your colour pallettes in your terminal program's profile settings.

In terminal>preferences>profiles (same on mac and GNU/linux (or at least ubuntu))

This can be good as if you're staring at your terminal for hours, it's good to have your favourite colours, but also different people find different colours easier on the eyes and this can account for this.

#### simple changes to customize you terminal
---
touch ~/.hushlogin - this creates an empty hushlogin file in your home directory telling your terminal not to display a last login message.

_windows users_: [cmdr]( https://github.com/cmderdev/cmder ) is a software package that emulates a console/terminal emulator,
another simpler and useful way to add git completion is through a[ simple script ](https://classroom.udacity.com/courses/ud775/lessons/2980038599/concepts/33417185870923#) created by the  makers of the udacity course which tracks git changes.


#### terminal emulators
these programs add functionality to the default terminal program such as split tabs, profiles, search, paste history.

### split panes
![split panes](https://www.iterm2.com/img/screenshots/split_panes_full.png)

### [zsh and oh-my-zsh ](http://jilles.me/badassify-your-terminal-and-shell/)

#### changing shells
further customization is possible i.e showing git branches, adding images autocompletion, autosuggestions by changing shell (less complicated than it sounds) and using a community driven framework for managing your shell called **oh my zsh**


## Resources

[badassify your terminal](http://jilles.me/badassify-your-terminal-and-shell/)
