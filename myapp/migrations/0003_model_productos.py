# Generated by Django 5.2.1 on 2025-05-31 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_rename_usurios_modelusurios'),
    ]

    operations = [
        migrations.CreateModel(
            name='Model_Productos',
            fields=[
                ('idproduct', models.IntegerField(primary_key=True, serialize=False)),
                ('codigo', models.CharField(max_length=40)),
                ('descripcion', models.CharField(max_length=150)),
                ('familia', models.CharField(max_length=40)),
            ],
        ),
    ]
