#!/usr/bin/env python3
import subprocess
import os
import signal
import gi
gi.require_version('Gtk', '3.0')
gi.require_version('AppIndicator3', '0.1')
from gi.repository import Gtk, AppIndicator3
from os.path import expanduser
home = expanduser("~")

currpath = os.path.dirname(os.path.realpath(__file__))
iconpath = currpath+"/icon.png"
commandpath = home

class Indicator():
    def __init__(self):
        self.app = 'update_setting'
        self.indicator = AppIndicator3.Indicator.new(
            self.app, iconpath,
            AppIndicator3.IndicatorCategory.SYSTEM_SERVICES)
        self.indicator.set_status(AppIndicator3.IndicatorStatus.ACTIVE)       
        self.indicator.set_menu(self.create_menu())
        self.indicator.set_label("Latsuj", self.app)

    def getscripts(self):
        cmd_data = [l for l in open(
            os.path.join(commandpath, "commands")
            ).read().splitlines()]
        cmd_data = [l.split("||") for l in cmd_data]  
        for cmd in cmd_data:
            menuitem = Gtk.MenuItem.new_with_label(cmd[0].strip())
            menuitem.connect("activate", self.run_script, cmd[1].strip())
            self.menu.append(menuitem)

    def create_menu(self):
        self.menu = Gtk.Menu()
        self.getscripts()
        self.menu.show_all()
        return self.menu

    def run_script(self, widget, script):
        subprocess.Popen(["/bin/bash", "-c", script])

    def stop(self, source):
        Gtk.main_quit()

Indicator()
signal.signal(signal.SIGINT, signal.SIG_DFL)
Gtk.main()
