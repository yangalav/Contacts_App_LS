# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-10 01:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='image',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
