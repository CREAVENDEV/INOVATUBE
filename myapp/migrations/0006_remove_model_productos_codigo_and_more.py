# Generated by Django 5.2.1 on 2025-06-07 19:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0005_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='model_productos',
            name='codigo',
        ),
        migrations.RemoveField(
            model_name='model_productos',
            name='descripcion',
        ),
        migrations.RemoveField(
            model_name='model_productos',
            name='familia',
        ),
        migrations.RemoveField(
            model_name='modelusurios',
            name='correo',
        ),
        migrations.RemoveField(
            model_name='modelusurios',
            name='password',
        ),
    ]
