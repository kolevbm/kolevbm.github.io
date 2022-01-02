---
layout: post
title: Create an Array of objects
date:   2021-02-19 20:41:49 +0200
categories: C# 
---

Function code:
```csharp
T[] InitializeArray<T>(int length) where T : new()
        {
            T[] array = new T[length];
            for (int i = 0; i < length; ++i)
            {
                array[i] = new T();
            }

            return array;
        }
```
Example:

```csharp
int BI = 32;
IOconfigurator.BInput[] Inputs; //declare an array of type object

public Main()
{
	Inputs = InitializeArray<IOconfigurator.BInput>(BI); // initialize each element of the array
}
```

