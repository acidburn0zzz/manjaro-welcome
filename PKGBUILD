# maintainer: Philip Müller <philm[at]manjaro[dog]org>

pkgname=manjaro-welcome
pkgver=0.8.10-pre1
pkgrel=1
pkgdesc="The Manjaro Welcome utility provides a simple interface for accessing all the relevant information for a new user of Manjaro."
arch=(any)
url="https://git.manjaro.org/core/manjaro-welcome"
license=('GPL')
depends=('python-simplejson' 'python-gobject' 'pywebkitgtk')
options=(!emptydirs)
_git=Yes
_branch=development

if [ "$_git" == "No" ]; then
   ## Stable release
   source=("manjaro-welcome-$pkgver.tar.gz::http://git.manjaro.org/core/manjaro-welcome/repository/archive.tar.gz?ref=$pkgver")
   sha256sums=('9aa63738feeb293896f9325398d56c2ca48e1e95a9e64c7208aca19bc9e884b5')
else
   ## Git release
   source=(git+http://git.manjaro.org/core/manjaro-welcome.git#branch=$_branch)
   sha256sums=('SKIP')
fi

package() {
    if [ -e "$srcdir/$pkgname.git" ]; then
        cd "$srcdir/$pkgname.git/src"
    else
        cd "$srcdir/$pkgname/src"
    fi
    
    mkdir -p "${pkgdir}/usr/share/${pkgname}"
    mkdir -p "${pkgdir}/usr/share/icons/hicolor"
    cp  -a data/* "${pkgdir}/usr/share/${pkgname}"
    touch "${pkgdir}/usr/share/${pkgname}/index.html"
    chmod 666 "${pkgdir}/usr/share/${pkgname}/index.html"
    install -D -m644 ${pkgname}.desktop ${pkgdir}/etc/skel/.config/autostart/${pkgname}.desktop
    install -D -m644 ${pkgname}.desktop ${pkgdir}/usr/share/applications/${pkgname}.desktop
    install -D -m755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
    install -D -m755 "${pkgname}-terminal" "${pkgdir}/usr/bin/${pkgname}-terminal"

}
